import React from 'react';
import Navigator from '../../components/Vegefoods/Navigator';
import ProductDetails from '../../components/Vegefoods/ProductDetails';
import Footer from '../../components/Vegefoods/Footer';
import Subscribe from '../../components/Vegefoods/Subscribe';
import Product from '../../components/Vegefoods/Product';
import Heading from '../../components/Vegefoods/Heading';


class SingleProduct extends React.Component {
  render() {
    return (
      <div className="SingleProduct">

        <Navigator />
        <Heading title="Single Product" imageUrl="images/bg_1.jpg" />

        <ProductDetails />

        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center mb-3 pb-3">
              <div className="col-md-12 heading-section text-center ">
                <span className="subheading">Products</span>
                <h2 className="mb-4">Related Products</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">

              <Product name="Bell Pepper" price="80" discount="20" imageUrl="images/product-1.jpg" />

              <Product name="Strawberry" price="120" discount="0" imageUrl="images/product-2.jpg" />

              <Product name="Green Beans" price="120" discount="0" imageUrl="images/product-3.jpg" />

              <Product name="Purple Cabbage" price="120" discount="0" imageUrl="images/product-4.jpg" />
            </div>
          </div>
        </section>
        <Subscribe />
        <Footer />


      </div>
    );
  }

}

export default SingleProduct;
