import React from 'react';
import { Link } from 'react-router-dom';
import {Row,Col} from 'react-bootstrap';
import SearchBarMenu from '../../components/AgroferiaCliente/SearchBarMenu';




class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Agroferia del Back' };
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg  bg-pink ftco-navbar-light" id="ftco-navbar">
                <div className="container pt-3">
                    <Row>
                        <Col md={1} xs={6}><img className="img-fluid" src="images/AgroferiaCliente/logoap.png" alt="Colorlib Template" /></Col>
                        <Col md={2} xs={6}><h5 className="white"> {this.state.value}</h5></Col>
                        
                        <Col md={4} >
                        <SearchBarMenu ></SearchBarMenu>
                        </Col>
                    <Col md={5}>    
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item" ><label className="nav-link"><Link to="/Ferias" ><span className="white">FERIAS</span></Link></label></li>

                            <li className="nav-item"><label className="nav-link"><Link to="/Tiendas"><span className="white">TIENDAS</span></Link></label></li>
                            <li className="nav-item"><label className="nav-link"><Link to="/Productos"><span className="white">PRODUCTOS</span></Link></label></li>


                            {/* ACTIVAR PARA SIGUIENTE SPRINT <li className="nav-item"><label className="nav-link"><Link to="/Map">MAPS</Link></label></li>
                            <li className="nav-item"><label className="nav-link"><Link to="/Calendar">CALENDARIO</Link></label></li> */}
                            
                            <li className="nav-item cta cta-colored "><label className="nav-link"><Link to="/Canasta"><span className="icons icon-shopping_basket"></span><span className="white">[0]</span></Link></label></li>
                            <li className="nav-item cta cta-colored "><label className="nav-link"><Link to="/Perfil"><span className="icons icon-person"></span></Link></label></li>

                        </ul>
                    </div>
                    </Col>
                    </Row>
                </div>
            </nav>
        );
    }

}

export default Menu;