import React from 'react';
import Menu from '../../components/AgroferiaCliente/Menu';
import Heading from '../../components/Vegefoods/Heading';
import ProductHistoricRate from '../../components/AgroferiaCliente/ProductHistoricRate';
import FooterComponent from '../../components/AgroferiaCliente/FooterComponent';
import APIFerias from '../../services/FairsService';
import moment from 'moment';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import {Button,Col} from 'react-bootstrap';




class HistoricDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            idUsuario: null,
            idCliente: null,
            idPedido: null,

            num:[],
            detalles:[],
            precios:[],
            cantidades:[],
            totales:[],

            subtotal:0,
            igv:0,
            total:0,
            descuento:0,
            orden: null,
            estado:"COMPLETADO",
            fechaCompra:null,
            estados : {
                3: "Pendiente",
                4: "Registrado",
                5: "Por recoger",
                6: "Despachado",
                7: "No recogido",
                8: "Cancelado",
                9: "Rechazado",

              }
        };

    }

    
 

    componentDidMount() {
        window.scrollTo(0, 0);
        if (sessionStorage.getItem("idCliente")) {
            this.state.idCliente = sessionStorage.getItem("idCliente");
            console.log("idCliente: ",this.state.idCliente);

            const {idPedido} = this.props.match.params;
            //traer el pedido actual del idCliente correspondiente para obtener el idPedido que usaremos luego
            APIFerias.get('Despliegue/api/pedidos/generico/' + idPedido)
                .then(res=> {
                    this.setState({
                        orden:parseInt(idPedido),
                        fechaCompra: moment(new Date(res.data.pedido.fecha)).format('DD/MM/YYYY'),
                        estado: res.data.pedido.estado,
                        total: res.data.pedido.total,
                        detalles: res.data.lstDetallePedido
                    });

                    console.log("Fecha de compra: ", this.state.fechaCompra);
                    //traer el detallePedido del idPedido, el cual es el actual
                   
                             
                });
                



        }

    }

    pad(num, size) {
        var s = num+"";
        while (s.length < size) s = "0" + s;
        return s;
    }

    componentWillUpdate(){

    }

    

    render() {
        return (
            <div className="Stores">
                <Menu />
                <Heading title="detalle del pedido" imageUrl="../images/agroferia_tienda1.jpg" />
                <section className="pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h4 className="heading"> Detalle del pedido</h4>
                            </div>
                            <Col md={{ span: 3, offset: 3 }}>
                            <a href="/consultas-sugerencias">
                                <Button>Reclamo</Button>
                            </a>
                            </Col>
                            <div className="col-md-12">
                                <table className="table">
                                    <thead className="thead-primary">
                                        <tr className="text-center">
                                            <th>N° Orden</th>
                                            <th>&nbsp;</th>
                                            <th>Estado de tu compra</th>
                                            <th>Fecha de compra</th>
                                            <th>Total</th>
                                            <th>&nbsp;</th>


                                        </tr>   
                                    </thead>
                                    <tbody>
                                    <tr className="text-center">
                                            <th>{this.pad(this.state.orden,5)}</th>
                                            <th>&nbsp;</th>
                                            <th>{this.state.estados[this.state.estado]}</th>
                                            <th>{this.state.fechaCompra}</th>
                                            <th>S/. {this.state.total}</th>
                                            <th>&nbsp;</th>


                                        </tr>  
                                     
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-6">
                                <h4 className="heading"> Productos adquiridos</h4>
                            </div>
                            <div className="col-md-12">
                                <table className="table">
                                    <thead className="thead-primary">
                                        <tr className="text-center">
                                            <th>&nbsp;</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th>Total</th>
                                            <th>Estado</th>
                                            <th>Valorar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    
                                    {this.state.detalles.map(detalle => <ProductHistoricRate  triggerParentUpdate={this.updateMontos} idDetalle={detalle.index} idProducto={detalle.idProducto} cantidad={detalle.cantidad} monto={detalle.monto} estadoDetalle={this.state.estados[detalle.estado]}/>)}
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>

                </section>

                <FooterComponent />
            </div>
        );
    }

}

export default HistoricDetail;
