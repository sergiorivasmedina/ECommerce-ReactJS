import React from 'react';
import { Link } from 'react-router-dom';
import APIFerias from '../../services/FairsService'



class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'AGROFERIAS CAMPESINAS',
            client: null,
            nombre: ""
        };
    }

    componentDidMount() {

        if (sessionStorage.getItem("idUsuario")) {
            var idUSer = sessionStorage.getItem("idUsuario");


            APIFerias.get('/Despliegue/api/usuario/cliente/' + idUSer)
                .then(res => {
                    const client = res.data;
                    this.setState({ client: client, nombre: client.nombres, cierre: "Salir" })
                    console.log(this.state.client);
                })
        }


    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg  bg-pink ftco-navbar-light" id="ftco-navbar">
                <div className="container">

                    <img className="img-fluid" to="/" src="images/AgroferiaCliente/logoap.png" alt="Colorlib Template" />

                    <Link to="/" ><h5 className="white"> {this.state.value}</h5></Link>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">


                            <li className="nav-item cta cta-colored "><label className="nav-link"><Link to="/login"><span className="icons icon-person"></span></Link></label></li>

                        </ul>

                    </div>
                    <label className="nav-link"><Link to="/perfil" ><h8 className="white"> {this.state.nombre}</h8></Link></label>
                    <label className="nav-link"><Link to="/login" ><h8 className="white"> {this.state.cierre}</h8></Link></label>
                </div>
            </nav>
        );
    }

}

export default Menu;