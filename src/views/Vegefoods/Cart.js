import React from 'react';
import Navigator from '../../components/Vegefoods/Navigator';
import ProductDetails from '../../components/Vegefoods/ProductDetails';
import Footer from '../../components/Vegefoods/Footer';
import Subscribe from '../../components/Vegefoods/Subscribe';
import ProductTR from '../../components/Vegefoods/ProductTR';
import Heading from '../../components/Vegefoods/Heading';

import {Link} from 'react-router-dom';

class Cart extends React.Component {
    render() {
        return (
            <div className="Cart">

            <Navigator/>
            <Heading title="My Cart" imageUrl="images/bg_1.jpg" />

    <section className="ftco-section ftco-cart">
			<div className="container">
				<div className="row">
    			<div className="col-md-12 ">
    				<div className="cart-list">
	    				<table className="table">
						    <thead className="thead-primary">
						      <tr className="text-center">
						        <th>&nbsp;</th>
						        <th>&nbsp;</th>
						        <th>Product name</th>
						        <th>Price</th>
						        <th>Quantity</th>
						        <th>Total</th>
						      </tr>
						    </thead>
						    <tbody>
                            <ProductTR name="Product 1" description="Far far away, behind the word mountains, far from the countries" imageUrl="images/product-1.jpg" price="4.90" />
						      <ProductTR name="Product 2" description="Far far away, behind the word mountains, far from the countries" imageUrl="images/product-2.jpg" price="4.90" />

                            </tbody>
						  </table>
					  </div>
    			</div>
    		</div>
    		<div className="row justify-content-end">
    			<div className="col-lg-4 mt-5 cart-wrap ">
    				<div className="cart-total mb-3">
    					<h3>Coupon Code</h3>
    					<p>Enter your coupon code if you have one</p>
  						<form action="#" className="info">
	              <div className="form-group">
	              	<label for="">Coupon code</label>
	                <input type="text" className="form-control text-left px-3" placeholder=""/>
	              </div>
	            </form>
    				</div>
    				<p><label className="btn btn-primary py-3 px-4">Apply Coupond</label></p>
    			</div>
    			<div className="col-lg-4 mt-5 cart-wrap ">
    				<div className="cart-total mb-3">
    					<h3>Estimate shipping and tax</h3>
    					<p>Enter your destination to get a shipping estimate</p>
  						<form action="#" className="info">
	              <div className="form-group">
	              	<label for="">Country</label>
	                <input type="text" className="form-control text-left px-3" placeholder=""/>
	              </div>
	              <div className="form-group">
	              	<label for="country">State/Province</label>
	                <input type="text" className="form-control text-left px-3" placeholder=""/>
	              </div>
	              <div className="form-group">
	              	<label for="country">Zip/Postal Code</label>
	                <input type="text" className="form-control text-left px-3" placeholder=""/>
	              </div>
	            </form>
    				</div>
    				<p><label className="btn btn-primary py-3 px-4">Estimated</label></p>
    			</div>
    			<div className="col-lg-4 mt-5 cart-wrap ">
    				<div className="cart-total mb-3">
    					<h3>Cart Totals</h3>
    					<p className="d-flex">
    						<span>Subtotal</span>
    						<span>$20.60</span>
    					</p>
    					<p className="d-flex">
    						<span>Delivery</span>
    						<span>$0.00</span>
    					</p>
    					<p className="d-flex">
    						<span>Discount</span>
    						<span>$3.00</span>
    					</p>
    					<p className="d-flex total-price">
    						<span>Total</span>
    						<span>$17.60</span>
    					</p>
    				</div>
    				<p><label className="btn btn-primary py-3 px-4">Proceed to Checkoutd</label></p>
    			</div>
    		</div>
			</div>
		</section>


            <Subscribe/>
            <Footer/>

            
            </div>
        );
    }

}

export default Cart;
