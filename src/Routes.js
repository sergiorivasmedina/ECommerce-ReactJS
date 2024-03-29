import React from 'react';
import { Route, Link, BrowserRouter as Router,Switch  } from 'react-router-dom';


/*Vistas*/
import Home from './views/Vegefoods/Home';
import Shop from './views/Vegefoods/Shop';
import Wishlist from './views/Vegefoods/Wishlist';
import SingleProduct from './views/Vegefoods/SingleProduct';
import Cart from './views/Vegefoods/Cart';
import Checkout from './views/Vegefoods/Checkout';
import NotFound from './views/Vegefoods/NotFound';


import Template from './views/AgroferiaCliente/Template';
import Store from './views/AgroferiaCliente/Store';

import FairList from './views/AgroferiaCliente/FairList';
import Ferias from './views/AgroferiaCliente/Fairs';
import Tiendas from './views/AgroferiaCliente/Stores';
import Productos from './views/AgroferiaCliente/Products';
import Canasta from './views/AgroferiaCliente/Basket';
import Perfil from './views/AgroferiaCliente/Profile';
import DetalleTienda from './views/AgroferiaCliente/StoreDetail';
import DetalleProducto from './views/AgroferiaCliente/ProductDetail';
import Login from './views/AgroferiaCliente/Login';
import Registro from './views/AgroferiaCliente/Register';
import PagoFinal from './views/AgroferiaCliente/Payment';
import Calendario from './views/AgroferiaCliente/Calendar';
import Historial from './views/AgroferiaCliente/Historic';
import DetalleHistorial from './views/AgroferiaCliente/HistoricDetail';
import OrderSummary from './views/AgroferiaCliente/OrderSummary';
import Mapa from './views/AgroferiaCliente/Map';
import OrderQuery from './views/AgroferiaCliente/OrderQuery';


const routing = (
  <Router>
    <div>
    <Switch>
      <Route exact path="/" component={Ferias} />
      <Route path="/home" component={Home} />
      <Route path="/listarFerias" component={FairList} />
      <Route path="/shop" component={Shop} />
      <Route path="/wishlist" component={Wishlist} />
      <Route path="/singleproduct" component={SingleProduct} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />

      <Route path="/template" component={Template} />
      <Route path="/store" component={Store} />
      <Route path="/ferias" component={Ferias} />
      <Route path="/tiendas" component={Tiendas} />
      <Route path="/productos" component={Productos} />
      <Route path="/canasta" component={Canasta} />
      <Route path="/perfil" component={Perfil} />
      <Route path="/detalleTienda" component={DetalleTienda} />
      <Route path="/detalleProducto" component={DetalleProducto} />
      <Route path="/login" component={Login}/>
      <Route path="/historial" component={Historial}/>
      <Route path="/registro" component={Registro}/>
      <Route path="/pago" component={PagoFinal}/>
      <Route path="/calendario" component={Calendario}/>
      <Route path="/mapa" component={Mapa}/>
      <Route path="/resumen" component={OrderSummary}/>
      <Route path="/detalleHistorial" component={DetalleHistorial}/>
      <Route path="/consultas-sugerencias" component={OrderQuery}/>
      <Route component={NotFound}/>
    </Switch>
    </div>
  </Router>
)

export default routing;