import React from 'react';
import { Link } from 'react-router-dom';

class Navigator extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
				<div className="container">
					<Link to="/home">Vegefoods</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="oi oi-menu"></span> Menu
	      </button>

					<div className="collapse navbar-collapse" id="ftco-nav">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item"><label className="nav-link"><Link to="/home">Home</Link></label></li>
							<li className="nav-item active dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
								<div className="dropdown-menu" aria-labelledby="dropdown04">
									<label className="dropdown-item" ><Link to="/shop">Shop</Link></label>
									<label className="dropdown-item" ><Link to="/wishlist">Wishlist</Link></label>
									<label className="dropdown-item" ><Link to="/singleproduct">Single Product</Link></label>
									<label className="dropdown-item" ><Link to="/cart">Cart</Link></label>
									<label className="dropdown-item" ><Link to="/checkout">Checkout</Link></label>
								</div>
							</li>
							<li className="nav-item"><a href="" className="nav-link">About</a></li>
							<li className="nav-item"><a href="" className="nav-link">Blog</a></li>
							<li className="nav-item"><a href="" className="nav-link">Contact</a></li>
							<li className="nav-item cta cta-colored"><label className="nav-link"><Link to="/cart"><span className="icon-shopping_cart"></span>[0]</Link></label></li>

						</ul>
					</div>
				</div>
			</nav>
		);
	}

}

export default Navigator;