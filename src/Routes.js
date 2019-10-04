import React from 'react';
import { Route, Link, BrowserRouter as Router,Switch  } from 'react-router-dom'

/*Vistas*/
import Home from './views/Vegefoods/Home';
import Shop from './views/Vegefoods/Shop';
import Wishlist from './views/Vegefoods/Wishlist';
import SingleProduct from './views/Vegefoods/SingleProduct';
import Cart from './views/Vegefoods/Cart';
import Checkout from './views/Vegefoods/Checkout';
import NotFound from './views/Vegefoods/NotFound';

import Template from './views/AgroferiaCliente/Template';


const routing = (
  <Router>
    <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/wishlist" component={Wishlist} />
      <Route path="/singleproduct" component={SingleProduct} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/template" component={Template} />
      <Route component={NotFound}/>
    </Switch>
    </div>
  </Router>
)

export default routing;