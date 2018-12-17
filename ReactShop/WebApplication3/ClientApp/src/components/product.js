import React from 'react';

class Product extends React.Component {

    render() {
        return (
            <div className="product">
                <img src="https://www.lg.com/us/content/img/support/img-dummy-product.jpg" />
                <h4>{this.props.product.name}</h4>
                <p>Price: <em>₴{this.props.product.price}</em></p>
                <p className="description">{this.props.product.description}</p>
                <button className="add-to-cart" type="button" onClick={() => this.props.handleOnAdd(this.props.product)}>Add to cart</button>
            </div>
        );
    }
}

export default Product;