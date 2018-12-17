import React from 'react';

class BasketLine extends React.Component {

    render() {
        return (
            <li className="clearfix">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
                <span className="item-name">{this.props.basketLine.name}</span>
                <span className="item-price">{this.props.basketLine.price}</span>
                <span className="item-quantity">Quantity: {this.props.basketLine.units}</span>
                <div className="item-change-quantity">
                    <button onClick={() => this.props.onAddUnit()}>+</button>
                    <button onClick={() => this.props.onDeductUnit()}>-</button>
                </div>
            </li>
        );
    }
}

export default BasketLine;