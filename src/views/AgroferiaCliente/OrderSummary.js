import React from 'react';
import Menu from '../../components/AgroferiaCliente/Menu';
import Heading from '../../components/Vegefoods/Heading';
import FooterComponent from '../../components/AgroferiaCliente/FooterComponent';
import FairHeading from '../../components/Vegefoods/FairHeading';
import ProductHistoric from '../../components/AgroferiaCliente/ProductHistoric';
import APIFerias from '../../services/FairsService';
import moment from 'moment';

class OrderSummary extends React.Component{
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
            saldo:0,
            subtotal:0,
            igv:0,
            total:0,
            descuento:0,
            orden: null,
            estado:"COMPLETADO",
            fechaCompra:null,
            estados : {
                1: "Pendiente",
                2: "Pendiente",
                3: "Pendiente",
                4: "Registrado",
                5: "Por recoger",
                6: "Despachado",
                7: "No recogido",
                8: "Rechazado",
                9: "Rechazado",

              }
        };

    }

    componentDidMount() {
        window.scrollTo(0, 0);
        if (sessionStorage.getItem("idCliente")) {
            this.state.idCliente = sessionStorage.getItem("idCliente");
            console.log("idCliente: ",this.state.idCliente);

            const {idPedido} = sessionStorage.getItem("idPedidoResumen");
            //traer el pedido actual del idCliente correspondiente para obtener el idPedido que usaremos luego
            APIFerias.get('Despliegue/api/pedidos/generico/' + sessionStorage.getItem("idPedidoResumen"))
                .then(res=> {
                    console.log("HOLA",res.data)

                    this.setState({
                        orden:parseInt(sessionStorage.getItem("idPedidoResumen")),
                        fechaCompra: moment(new Date(res.data.pedido.fecha)).format('DD/MM/YYYY'),
                        estado: res.data.pedido.estado,
                        total: res.data.pedido.total.toFixed(2),
                        detalles: res.data.lstDetallePedido
                    });

                    var cambio = {
                        idCliente: sessionStorage.getItem("idCliente"),
                        cambio:(-1) * localStorage.getItem("saldo")
                      };
                      console.log("cambio", cambio)
                      APIFerias.post('/Despliegue/api/usuario/cliente/aumentarSaldo', cambio)
                      .then(response => {
                        console.log("buena", response);
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

    render(){
        return(
            <div>
                <Menu fairId={sessionStorage.getItem('idFeria')}/>
                <FairHeading title="Resumen de compra" imageUrl="../images/agroferia_tienda1.jpg" />

                <section className="pt-5">
                    <div className="container">
                    <div className=" text-center" >
                                <h2 className="heading"> ¡Gracias por tu compra!</h2>
                                <h3 className="heading"> N° de orden: {this.pad(this.state.orden,5)}</h3>
                            </div>
                        <div className="row">
                        
                            <div className="col-md-6">
                                <h4 className="heading"> Detalle del pedido</h4>
                            </div>
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                    
                                    {this.state.detalles.map(detalle => <ProductHistoric  triggerParentUpdate={this.updateMontos} idDetalle={detalle.index} idProducto={detalle.idProducto} cantidad={detalle.cantidad} monto={detalle.monto} estadoDetalle={this.state.estados[detalle.estado]}/>)}
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>

                </section>


                <FooterComponent/>
            </div>
        )
    }
}

export default OrderSummary;