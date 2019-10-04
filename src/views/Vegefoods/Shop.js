import React from 'react';
import Navigator from '../../components/Vegefoods/Navigator';
import Product from '../../components/Vegefoods/Product';
import Footer from '../../components/Vegefoods/Footer';
import Subscribe from '../../components/Vegefoods/Subscribe';
import Heading from '../../components/Vegefoods/Heading';
import API from '../../services/ProductService';
import Axios from 'axios';

class Shop extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      products: []
    };
  }

  componentDidMount() {

    API.get('/photos')
      .then(res => {
        //first 12 elements
        const products = res.data.splice(0,12);
        this.setState({ products });
      });

  }


  render() {
    return (
      <div className="Shop">
        <Navigator />

        <Heading title="Products" imageUrl="images/bg_1.jpg" />
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 mb-5 text-center">
                <h3>Test Api</h3>
              </div>
            </div>
            <div className="row">
              {this.state.products.map(product => <Product name={product.title} price="120" discount="0" imageUrl={product.url} />)}
            </div>
          </div>
        </section>

        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 mb-5 text-center">
                <ul className="product-category">
                  <li><a href="#" className="active">All</a></li>
                  <li><a href="#">Vegetables</a></li>
                  <li><a href="#">Fruits</a></li>
                  <li><a href="#">Juice</a></li>
                  <li><a href="#">Dried</a></li>
                </ul>
              </div>
            </div>
            <div className="row">

              <Product name="Bell Pepper" price="80" discount="20" imageUrl="images/product-1.jpg" />


              <Product name="Strawberry" price="120" discount="0" imageUrl="images/product-2.jpg" />


              <Product name="Green Beans" price="120" discount="0" imageUrl="images/product-3.jpg" />


              <Product name="Purple Cabbage" price="120" discount="0" imageUrl="images/product-4.jpg" />



              <Product name="Tomatoe" price="120" discount="0" imageUrl="images/product-5.jpg" />



              <Product name="Brocolli" price="120" discount="0" imageUrl="images/product-6.jpg" />



              <Product name="Carrots" price="120" discount="0" imageUrl="images/product-7.jpg" />



              <Product name="Fruit Juice" price="120" discount="0" imageUrl="images/product-8.jpg" />



              <Product name="Onion" price="120" discount="0" imageUrl="images/product-9.jpg" />



              <Product name="Apple" price="120" discount="0" imageUrl="images/product-10.jpg" />



              <Product name="Garlic" price="120" discount="0" imageUrl="images/product-11.jpg" />



              <Product name="Chili" price="120" discount="0" imageUrl="images/product-12.jpg" />




              <div className="row mt-5">
                <div className="col text-center">
                  <div className="block-27">
                    <ul>
                      <li><a href="#">&lt;</a></li>
                      <li className="active"><span>1</span></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li><a href="#">&gt;</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Subscribe />

        <Footer />




      </div>
    );
  }

}

export default Shop;
