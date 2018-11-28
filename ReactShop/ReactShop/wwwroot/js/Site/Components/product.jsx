class Product extends React.Component {
    render() {
        return (
                <div className="product">
                    <img src="http://img.tjskl.org.cn/pic/z2577d9d-200x200-1/pinarello_lungavita_2010_single_speed_bike.jpg" alt="item" />
                    <h2>{this.props.name}</h2>
                <p>Price: <em>${this.props.price}</em></p>
                <p>{this.props.description}</p>
                <button class="add-to-cart" type="button">Add to cart</button>
                </div>
        );
    }
}

class ProductList extends React.Component {
    render() {
        console.log(this.props.data)
        const productNodes = this.props.data.map(product => (
            <Product name={product.name} id={product.id} description={product.description} price={product.price} key={product.id}>
                {product.Description}
            </Product>
        ));
        return <div className="productList">{productNodes}</div>;
    }
}

class ProductBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: 'initial', data: [] };
    }
    componentDidMount() {
        console.log(this.props.url)
        const xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, true);
        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);
            this.setState({ data: data });
        };
        xhr.send();
    }
    render() {
        return (
            <div className="productBox">
                <h1>Products</h1>
                <ProductList data={this.state.data} />
            </div>
        );
    }
}

ReactDOM.render(<ProductBox url="/api/products/get" />, document.getElementById('home'));