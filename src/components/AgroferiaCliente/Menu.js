import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import SearchBarMenu from '../../components/AgroferiaCliente/SearchBarMenu';
import APIFerias from '../../services/FairsService'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'AGROFERIAS CAMPESINAS',
            client: null,
            cantprod: 0
        };


    }

    componentDidMount() {




        if (sessionStorage.getItem("idUsuario")) {
            var idUSer = sessionStorage.getItem("idUsuario");
            var idCliente = sessionStorage.getItem("idCliente");
            APIFerias.get('Despliegue/api/pedido/' + idCliente)
                .then(res => {
                    console.log("menupedido", res.data);
                    //traer el detallePedido del idPedido, el cual es el actual
                    APIFerias.get('Despliegue/api/pedido/' + res.data.idPedido + '/detalle')
                        .then(response => {
                            const detalless = response.data;
                            this.setState({ cantprod: response.data.length })
                        })
                })

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
            <nav className="navbar navbar-expand-lg ftco-navbar-light" id="ftco-navbar">
                <div className="container pt-3">


                    {/*<Link to="/" ><h5 className="white"> {this.state.value}</h5></Link>*/}

                    <div className="col-md-5">
                        <div className="row">
                        <div className="col-md-4 text-right">
                        <img className="img-fluid customLogo" src="images/AgroferiaCliente/logo_blanco.jpg" alt="Colorlib Template" />
                        </div>
                        <div className="col-md-8">
                        <SearchBarMenu ></SearchBarMenu>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-7 text-center">
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav ml-auto row">

                                <li className="nav-item"><label className="nav-link pinkBottom"><Link to="/Ferias" ><span className="gray">FERIAS</span></Link></label></li>

                                <li className="nav-item"><label className="nav-link pinkBottom"><Link to={"/tiendas/" + localStorage.getItem('idFeria')}><span className="gray">TIENDAS</span></Link></label></li>
                                <li className="nav-item"><label className="nav-link pinkBottom"><Link to="/Productos"><span className="gray">PRODUCTOS</span></Link></label></li>


                                {/* ACTIVAR PARA SIGUIENTE SPRINT <li className="nav-item"><label className="nav-link"><Link to="/Map">MAPS</Link></label></li>
                            <li className="nav-item"><label className="nav-link"><Link to="/Calendar">CALENDARIO</Link></label></li> */}

                                <li className="nav-item cta cta-colored"><label className="nav-link"><Link to="/Canasta"><span className="icons icon-shopping_basket pink"></span><span>[{this.state.cantprod}]</span></Link></label></li>
                                <li className="nav-item cta cta-colored"><label className="nav-link"><Link to="/Login"><span className="icons icon-person pink"></span><span>{this.state.nombre}</span></Link></label></li>

                                {/*<li className="nav-item"><label className="nav-link"><Link to="/login" ><h8 className="gray"> {this.state.cierre}</h8></Link></label></li>*/}


                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Menu;