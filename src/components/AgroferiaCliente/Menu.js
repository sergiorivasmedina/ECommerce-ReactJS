import React from 'react';
import { Link } from 'react-router-dom';



class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Agroferia del Back' };
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg  bg-pink ftco-navbar-light" id="ftco-navbar">
                <div className="container">

                    <img className="img-fluid" src="../images/AgroferiaCliente/logoap.png" alt="Colorlib Template" />    
            
                    <h5 className="white"> {this.state.value}</h5>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item" ><label className="nav-link"><Link to="/Ferias" ><span className="white">FERIAS</span></Link></label></li>

                            <li className="nav-item"><label className="nav-link"><Link to={"/tiendas/" + localStorage.getItem('idFeria')}><span className="white">TIENDAS</span></Link></label></li>
                            <li className="nav-item"><label className="nav-link"><Link to="/Productos"><span className="white">PRODUCTOS</span></Link></label></li>


                            {/* ACTIVAR PARA SIGUIENTE SPRINT <li className="nav-item"><label className="nav-link"><Link to="/Map">MAPS</Link></label></li>
                            <li className="nav-item"><label className="nav-link"><Link to="/Calendar">CALENDARIO</Link></label></li> */}

                            <li className="nav-item cta cta-colored "><label className="nav-link"><Link to="/Canasta"><span className="icons icon-shopping_basket"></span><span className="white">[0]</span></Link></label></li>
                            <li className="nav-item cta cta-colored "><label className="nav-link"><Link to="/Perfil"><span className="icons icon-person"></span></Link></label></li>

                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Menu;