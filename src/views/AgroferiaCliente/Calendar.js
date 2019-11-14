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



export default class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: [],
            simbolo: null,
            quantity: 0,
            categoria: null,
            total: 0,
            idUsuario: null
        }
        this.updateQuantity = this.updateQuantity.bind(this);
        this.addproduct = this.addproduct.bind(this);

    }



    updateQuantity(evt) {
        this.setState({
            quantity: evt.target.value,
            total: evt.target.value * this.state.product.precio
        });
        console.log(this.state.quantity);
    }

    addproduct = (event) => {
        const { id } = this.props.match.params;
        var prod = {
            idPedido: "",
            idTipoMedioPago: 1,
            idCupon: 1,
            idCliente: parseInt(this.state.idUsuario),
            fecha: "2019-10-25",
            subtotal: this.state.total,
            igv: 0.18,
            total: this.state.total / (1.18),
            estado: -1,
            idProducto: parseInt(id),
            cantidad: parseFloat(this.state.quantity),
            monto: parseFloat(this.state.product.precio)
        }
        console.log(prod)
        APIFerias.post('/Despliegue/api/pedido/producto', prod)
            .then(response => {
                console.log("Producto añadido")

                Swal.fire({
                    title: 'Producto añadido a la canasta',
                    type: 'success'
                }
                )

                return response;

            })

    }

    componentDidMount() {
        window.scrollTo(0, 0);
        if (sessionStorage.getItem("idCliente")) {
            this.state.idUsuario = sessionStorage.getItem("idCliente");

        }


    }


    componentWillMount() {
        const { id } = this.props.match.params;


        APIFerias.get('Despliegue/api/producto/' + id)
            .then(res => {
                const product = res.data;
                this.setState({
                    product: product,
                    simbolo: product.unidadMedida.simbolo,
                    categoria: product.subCategoria.categoria.idCategoria
                });
            });

    }


    render() {
        return (
            <div>
                <Menu />
                <div className="col-md-12 heading-section text-center ">
                <h6>&nbsp; </h6>

                    <h2 className="mb-4">Calendarios Agrícolas</h2>
                    <p>  Fuente: Ministerio de Agricultura y Riego</p>
                    <h6>&nbsp; </h6>

                </div>


                <div class="d-flex justify-content-center">


                    <ul className="product-category" style={{ width: "1000px" }} >
                        <Button variant="primary" href="http://www.minagri.gob.pe/portal/download/xls/agricola/calendarioagricola/cal_amazonas.xls" style={{ width: "14%" }}>Amazonas</Button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
    
                    <Button variant="primary" href="https://www.minagri.gob.pe/portal/download/xls/agricola/calendarioagricola/cal_ancash.xls" style={{ width: "14%" }}>Ancash</Button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button variant="primary" href="https://www.minagri.gob.pe/portal/download/xls/agricola/calendarioagricola/cal_apurimac.xls" style={{ width: "14%" }}>Apurimac</Button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button variant="primary" href="https://www.minagri.gob.pe/portal/download/xls/agricola/calendarioagricola/cal_arequipa.xls" style={{ width: "14%" }}>Arequipa</Button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button variant="primary" href="https://www.minagri.gob.pe/portal/download/xls/agricola/calendarioagricola/cal_ayacucho.xls" style={{ width: "14%" }}>Ayacucho</Button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button variant="primary" href="https://www.minagri.gob.pe/portal/download/xls/agricola/calendarioagricola/cal_cajamarca.xls" style={{ width: "14%" }}>Cajamarca</Button>
                        <h6>&nbsp; </h6>
                        <Button variant="primary" href="https://www.minagri.gob.pe/portal/download/xls/agricola/calendarioagricola/cal_cusco.xls" style={{ width: "14%" }}>Cusco</Button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button variant="primary" href="https://www.minagri.gob.pe/portal/download/xls/agricola/calendarioagricola/cal_huancavelica.xls" style={{ width: "14%" }}>Huancavelica</Button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button variant="primary" href="https://www.minagri.gob.pe/portal/download/xls/agricola/calendarioagricola/cal_huanuco.xls" style={{ width: "14%" }}>Huánuco</Button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button variant="primary" href="https://www.minagri.gob.pe/portal/download/xls/agricola/calendarioagricola/cal_ica.xls" style={{ width: "14%" }}>Ica</Button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button variant="primary" href="https://www.minagri.gob.pe/portal/download/xls/agricola/calendarioagricola/cal_junin.xls" style={{ width: "14%" }}>Junín</Button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button variant="primary" href="https://www.minagri.gob.pe/portal/download/xls/agricola/calendarioagricola/cal_lalibertad.xls" style={{ width: "14%" }}>La Libertad</Button>
                        <h6>&nbsp; </h6>
                        <Button variant="primary" href="https://www.minagri.gob.pe/portal/download/xls/agricola/calendarioagricola/cal_lambayeque.xls" style={{ width: "14%" }}>Lambayeque</Button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button variant="primary" href="https://www.minagri.gob.pe/portal/download/xls/agricola/calendarioagricola/cal_lima.xls" style={{ width: "14%" }}>Lima</Button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button variant="primary" href="https://www.minagri.gob.pe/portal/download/xls/agricola/calendarioagricola/cal_loreto.xls" style={{ width: "14%" }}>Loreto</Button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button variant="primary" href="https://www.minagri.gob.pe/portal/download/xls/agricola/calendarioagricola/cal_madrededios.xls" style={{ width: "14%" }}>Madre de Dios</Button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button variant="primary" href="https://www.minagri.gob.pe/portal/download/xls/agricola/calendarioagricola/cal_moquegua.xls" style={{ width: "14%" }}>Moquegua</Button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button variant="primary" href="https://www.minagri.gob.pe/portal/download/xls/agricola/calendarioagricola/cal_pasco.xls" style={{ width: "14%" }}>Pasco</Button>
                        <h6>&nbsp; </h6>
                        <Button variant="primary" href="https://www.minagri.gob.pe/portal/download/xls/agricola/calendarioagricola/cal_piura.xls" style={{ width: "14%" }}>Piura</Button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button variant="primary" href="https://www.minagri.gob.pe/portal/download/xls/agricola/calendarioagricola/cal_puno.xls" style={{ width: "14%" }}>Puno</Button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button variant="primary" href="https://www.minagri.gob.pe/portal/download/xls/agricola/calendarioagricola/cal_sanmartin.xls" style={{ width: "14%" }}>San Martín</Button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button variant="primary" href="https://www.minagri.gob.pe/portal/download/xls/agricola/calendarioagricola/cal_tacna.xls" style={{ width: "14%" }}>Tacna</Button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button variant="primary" href="https://www.minagri.gob.pe/portal/download/xls/agricola/calendarioagricola/cal_tumbes.xls" style={{ width: "14%" }}>Tumbes</Button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button variant="primary" href="https://www.minagri.gob.pe/portal/download/xls/agricola/calendarioagricola/cal_ucayali.xls" style={{ width: "14%" }}>Ucayali</Button>
                        <h6>&nbsp; </h6>


                    </ul>
                </div>

                <br />


                <FooterComponent />
            </div >
        )
    }
}
