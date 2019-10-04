import React from 'react';
import Navigator from '../../components/Vegefoods/Navigator';
import Footer from '../../components/Vegefoods/Footer';
import Subscribe from '../../components/Vegefoods/Subscribe';
import ProductTR from '../../components/Vegefoods/ProductTR';
import Heading from '../../components/Vegefoods/Heading';

class Wishlist extends React.Component {
    render() {
        return (
            <div className="Wishlist">
                <Navigator/>
                <Heading title="Wishlist" imageUrl="images/bg_1.jpg" />

    <section className="ftco-section ftco-cart">
			<div className="container">
				<div className="row">
    			<div className="col-md-12 ">
    				<div className="cart-list">
	    				<table className="table">
						    <thead className="thead-primary">
						      <tr className="text-center">
						        <th>&nbsp;</th>
						        <th>Product List</th>
						        <th>&nbsp;</th>
						        <th>Price</th>
						        <th>Quantity</th>
						        <th>Total</th>
						      </tr>
						    </thead>
						    <tbody>
						      <ProductTR name="Product 1" description="Far far away, behind the word mountains, far from the countries" imageUrl="images/product-1.jpg" price="4.90" />
						      <ProductTR name="Product 2" description="Far far away, behind the word mountains, far from the countries" imageUrl="images/product-2.jpg" price="4.90" />
						      <ProductTR name="Product 3" description="Far far away, behind the word mountains, far from the countries" imageUrl="images/product-3.jpg" price="4.90" />
						      <ProductTR name="Product 4" description="Far far away, behind the word mountains, far from the countries" imageUrl="images/product-4.jpg" price="4.90" />
						      <ProductTR name="Product 5" description="Far far away, behind the word mountains, far from the countries" imageUrl="images/product-5.jpg" price="4.90" />

						   
						    </tbody>
						  </table>
					  </div>
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

export default Wishlist;
