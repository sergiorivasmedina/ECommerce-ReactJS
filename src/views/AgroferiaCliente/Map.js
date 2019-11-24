import React, { Component } from 'react'
import { Form, Row, Container, Col, Button, Image, Tabs, Tab } from 'react-bootstrap';

import Menu from '../../components/AgroferiaCliente/Menu';
import ReturnButton from '../../components/AgroferiaCliente/ReturnButton';
import APIFerias from '../../services/FairsService';
import { Link } from 'react-router-dom';
import FooterComponent from '../../components/AgroferiaCliente/FooterComponent';
import ProductProfile from '../../components/AgroferiaCliente/ProductProfile';
import SimilarProducts from '../../components/AgroferiaCliente/SimilarProducts';
import Swal from 'sweetalert2';



export default class Map extends Component {




    constructor(props) {
        super(props);
        this.state = {
            popUpVisible: false,
            popUpTVVisible: false,
            tiendaModal: {},
            imagen: null,
            televisor: JSON.parse(localStorage.getItem("localTelevisor")),
            idFeriaSeleccionada: sessionStorage.getItem("idFeria")
        };
        this.anchoImagen = 1000;
        this.altoImagen = 350;
        this.factor = { x: 15 / 1200, y: 30 / 382 };

    }





    componentDidMount() {
        window.scrollTo(0, 0);
        if (sessionStorage.getItem("idCliente")) {
            this.state.idUsuario = sessionStorage.getItem("idCliente");

        }


    }


    componentWillMount() {
        const { id } = this.props.match.params;


        fetch("https://fmh7fxbfoh.execute-api.us-east-2.amazonaws.com/Despliegue/api/tiendas/feria/1")
            .then(res => res.json())
            .then((data) => {
                this.setState({ tiendas: data.filter((x) => x.tipoTienda === 0) })
                // this.setState({ tiendas: data });
                fetch("https://fmh7fxbfoh.execute-api.us-east-2.amazonaws.com/Despliegue/api/mapa/1/imagen")
                    .then(res => res.json())
                    .then((data) => {
                        console.log("Imagen es ")
                        console.log(data.urlImagen);
                        this.setState({ imagen: data.urlImagen })
                    })
                    .catch(console.log)
            })
            .catch(console.log)
    }




    render() {
        return (
            <div>
                <Menu />
                <div className="col-md-12 heading-section text-center ">
                    <h6>&nbsp; </h6>

                    <h2 className="mb-4">Mapa de la feria</h2>
                    <h6>&nbsp; </h6>

                </div>


                <div class="d-flex justify-content-center">


                    <ul className="product-category" style={{ width: "1000px" }} >
                        <div
                            id="divGrande"
                            style={{
                                backgroundImage: 'url(' + this.state.imagen + ')',
                                width: '1000px',
                                height: '350px',
                                backgroundSize: '100% 100%',
                                position: 'relative',
                                marginLeft: '4%',
                                marginTop: '5%'
                            }}></div>


                    </ul>
                </div>

                <br />


                <FooterComponent />
            </div >
        )
    }
}
