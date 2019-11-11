import React from 'react';
import { Link } from 'react-router-dom';
import APIFerias from '../../services/FairsService'



class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'AGROFERIAS CAMPESINAS',
            client: null,
            nombre: "",
            user: ""
        };
    }

    componentDidMount() {

        if (sessionStorage.getItem("idUsuario")) {
            var idUSer = sessionStorage.getItem("idUsuario");


            APIFerias.get('/Despliegue/api/usuario/cliente/' + idUSer)
                .then(res => {
                    const client = res.data;
                    this.setState({ client: client, nombre: client.nombres, cierre: "Salir", user: idUSer })
                    console.log(this.state.client);
                })
        }
        


    }

    render() {
        var userActions;
        
        console.log(this.state.user);
        if(this.state.user == "") {
            userActions = <ul className="navbar-nav ml-auto row">



            <li className="nav-item active dropdown show">
                <a className="nav-link text-left" href="/login" id="dropdown04" aria-haspopup="true" aria-expanded="true"><span className="mediumIcon icon-person pink pr-1"></span><span className="pink">INICIAR SESIÓN</span></a>
                
            </li>
        </ul>
        } else {
            userActions = <ul className="navbar-nav ml-auto row">



            <li className="nav-item active dropdown show">
                <a className="nav-link dropdown-toggle text-left" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span className="mediumIcon icon-person pink"></span><span className="pink">{this.state.nombre}</span></a>
                <div className="dropdown-menu show" aria-labelledby="dropdown04">

                    <a className="dropdown-item" href="/historic"><span>HISTORIAL DE PEDIDOS</span></a>
                    <a className="dropdown-item" href="/perfil"><span>PERFIL</span></a>
                    <a className="dropdown-item" href="/login"><span>CERRAR SESIÓN</span></a>
                </div>
            </li>
        </ul>
        }

        return (
            <nav className="navbar navbar-expand-lg ftco-navbar-light" id="ftco-navbar">
                <div className="container">

                    <img className="img-fluid customLogo" to="/" src="https://static.wixstatic.com/media/ca3438_d19b292fe67d48a9850302656b8968cb~mv2.jpg/v1/fill/w_190,h_190,al_c,q_80,usm_0.66_1.00_0.01/Untitled.jpg" alt="Colorlib Template" />

                    <Link to="/" ><h5 className="pink pt-4"> {this.state.value}</h5></Link>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                    
                    {userActions}

                    </div>
                </div>
            </nav>
        );
    }

}

export default Menu;