import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {deleteFromBasket, updateItemUnits} from '../actions/basketActions';
import BasketLine from "./basketLine";

class Basket extends React.Component {
    basketTotal() {
        return (
            <div className="shopping-cart-header">
                <i className="fa fa-shopping-cart cart-icon"></i><span className="badge">{this.unitsCount(this.props.basket)}</span>
                <div className="shopping-cart-total">
                    <span className="lighter-text">Total:</span>
                    <span className="main-color-text">{this.totalAmount(this.props.basket)}</span>
                </div>
            </div>
        );
    }
    renderBasket() {
        return (
            <ul className="shopping-cart-items">
                {this.basketLines()}
            </ul>
        );
    }
    basketLines() {
        return (
            this.props.basket.map(basketLine => {
                return (
                    <BasketLine key={basketLine.id}
                        basketLine={basketLine}
                        onAddUnit={this.handleAddUnit.bind(this, basketLine.id)}
                        onDeductUnit={this.handleDeductUnit.bind(this, basketLine.id)}/>
                );
            })
        );
    }

    handleDeleteFromBasket(id) {
        this.props.deleteFromBasket({id})
    }
    handleDeductUnit(id) {
        let units = -1;
        this.props.updateItemUnits({id, units})
    }
    handleAddUnit(id) {
        let units = 1;
        this.props.updateItemUnits({id, units})
    }

    totalAmount(basketLines) {
        return basketLines.reduce((acum, item) => {
            acum += item.price * item.units;
            return acum;
        }, 0);
    }

    unitsCount(basketLines) {
        return basketLines.reduce((acum, item) => {
            acum += item.units;
            return acum;
        }, 0);
    }

    render() {
        if (this.props.basket.length !== 0) {
            return (
                    <div className='shopping-cart'>
                        {this.basketTotal()}
                        {this.renderBasket()}
                        </div>
            );
        }

        return (
            <div className='shopping-cart'>No products in basket</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        basket: state.basket
    }
}
function mapActionsToProps(dispatch) {
    return bindActionCreators({
        deleteFromBasket,
        updateItemUnits
    }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(Basket);