import React from 'react';
import { Link } from 'react-router-dom';



class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'AGROFERIAS CAMPESINAS' };
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg  bg-pink ftco-navbar-light" id="ftco-navbar">
                <div className="container">

                    <img className="img-fluid" src="images/AgroferiaCliente/logoap.png" alt="Colorlib Template" />    
            
                    <h5 className="white"> {this.state.value}</h5>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">

                          
                            <li className="nav-item cta cta-colored "><label className="nav-link"><Link to="/login"><span className="icons icon-person"></span></Link></label></li>

                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Menu;