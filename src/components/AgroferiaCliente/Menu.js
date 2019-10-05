import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Agroferia del Back' };
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <h5> {this.state.value}</h5>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item"><label className="nav-link"><Link to="/Ferias" >FERIAS</Link></label></li>
                            <li className="nav-item"><label className="nav-link"><Link to="/Tiendas">TIENDAS</Link></label></li>
                            <li className="nav-item"><label className="nav-link"><Link to="/Productos">PRODUCTOS</Link></label></li>

                            
                            {/* ACTIVAR PARA SIGUIENTE SPRINT <li className="nav-item"><label className="nav-link"><Link to="/Map">MAPS</Link></label></li>
                            <li className="nav-item"><label className="nav-link"><Link to="/Calendar">CALENDARIO</Link></label></li> */}
                            
                            <li className="nav-item cta cta-colored "><label className="nav-link"><Link to="/Canasta"><span className="icon-shopping_basket"></span>[0]</Link></label></li>
                            <li className="nav-item cta cta-colored"><label className="nav-link"><Link to="/Perfil"><span className="icon-person"  ></span></Link></label></li>

                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Menu;