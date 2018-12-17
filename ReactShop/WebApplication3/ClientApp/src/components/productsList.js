import React from 'react';
import {connect} from 'react-redux';
import {addToBasket} from '../actions/basketActions'
import Product from "./product";
import Basket from './basket'
import { bindActionCreators } from 'redux'

class ProductsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { products: [] };
    }
    componentDidMount() {
        const xhr = new XMLHttpRequest();
        xhr.open('get', "/api/products/get", true);
        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);
            this.setState({ products: data });
        };
        xhr.send();
    }
    addProductToBasket(product) {
        this.props.addToBasket(product);
    }
    renderProducts() {
        return (
            this.state.products.map((p) => {
                return (
                    <Product handleOnAdd={this.addProductToBasket.bind(this)} product={p} key={p.id} />
                );
            })
        );
    }

    render() {
        return (
            <div>
                <h1>React shop</h1>
                <Basket />
                <div className="productBox">
                    <h1>Products</h1>
                    {this.renderProducts()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addToBasket }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);