import React from 'react';
import Navigator from '../../components/Vegefoods/Navigator';
import Product from '../../components/Vegefoods/Product';
import Footer from '../../components/Vegefoods/Footer';
import Subcribe from '../../components/Vegefoods/Subscribe';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Heading from '../../components/Vegefoods/Heading';
import TestimonyCarousel from '../../components/Vegefoods/TestimonyCarousel';
import Badge from '../../components/Vegefoods/Badge';

// ....

// className "owl-theme" is optional

class Home extends React.Component {
  render() {
    return (
      <div className="Home">

        <Navigator />

        <Heading title="Agroferias Campesinas" imageUrl="images/bg_1.jpg" />

        <section className="ftco-section">
          <div className="container">
            <div className="row no-gutters ftco-services">

              <Badge name="Free Shipping" description="On order over $100" icon="flaticon-shipped" />
              <Badge name="Always Fresh" description="Product well package" icon="flaticon-diet" />
              <Badge name="Superior Quality" description="Quality Products" icon="flaticon-award" />
              <Badge name="Support" description="24/7 Support" icon="flaticon-customer-service" />
            </div>
          </div>
        </section>

        <section className="ftco-section ftco-category ftco-no-pt">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-6 order-md-last align-items-stretch d-flex">
                    <div className="category-wrap-2  img align-self-stretch d-flex" style={{ backgroundImage: "url(images/category.jpg)" }}>
                      <div className="text text-center">
                        <h2>Vegetables</h2>
                        <p>Protect the health of every home</p>
                        <p><a href="#" className="btn btn-primary">Shop now</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="category-wrap  img mb-4 d-flex align-items-end" style={{ backgroundImage: "url(images/category-1.jpg)" }}>
                      <div className="text px-3 py-1">
                        <h2 className="mb-0"><a href="#">Fruits</a></h2>
                      </div>
                    </div>
                    <div className="category-wrap  img d-flex align-items-end" style={{ backgroundImage: "url(images/category-2.jpg)" }}>
                      <div className="text px-3 py-1">
                        <h2 className="mb-0"><a href="#">Vegetables</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="category-wrap  img mb-4 d-flex align-items-end" style={{ backgroundImage: "url(images/category-3.jpg)" }}>
                  <div className="text px-3 py-1">
                    <h2 className="mb-0"><a href="#">Juices</a></h2>
                  </div>
                </div>
                <div className="category-wrap  img d-flex align-items-end" style={{ backgroundImage: "url(images/category-4.jpg)" }}>
                  <div className="text px-3 py-1">
                    <h2 className="mb-0"><a href="#">Dried</a></h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center mb-3 pb-3">
              <div className="col-md-12 heading-section text-center ">
                <span className="subheading">Featured Products</span>
                <h2 className="mb-4">Our Products</h2>
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

              <Product name="Tomatoe" price="120" discount="0" imageUrl="images/product-5.jpg" />

              <Product name="Brocolli" price="120" discount="0" imageUrl="images/product-6.jpg" />

              <Product name="Carrots" price="120" discount="0" imageUrl="images/product-7.jpg" />

              <Product name="Fruit Juice" price="120" discount="0" imageUrl="images/product-8.jpg" />


            </div>
          </div>
        </section>

        <section className="ftco-section img" style={{ backgroundImage: "url(images/bg_3.jpg)" }}>
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-md-6 heading-section  deal-of-the-day ">
                <span className="subheading">Best Price For You</span>
                <h2 className="mb-4">Deal of the day</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                <h3><a href="#">Spinach</a></h3>
                <span className="price">$10 <a href="#">now $5 only</a></span>
                <div id="timer" className="d-flex mt-5">
                  <div className="time" id="days"></div>
                  <div className="time pl-3" id="hours"></div>
                  <div className="time pl-3" id="minutes"></div>
                  <div className="time pl-3" id="seconds"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section testimony-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-7 heading-section  text-center">
                <span className="subheading">Testimony</span>
                <h2 className="mb-4">Our satisfied customer says</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-12">
                <TestimonyCarousel />
              </div>
            </div>
          </div>
        </section>


        <Subcribe />
        <Footer />
      </div>
    );
  }

}

export default Home;
