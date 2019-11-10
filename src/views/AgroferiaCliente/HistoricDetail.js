import React from 'react';
import Menu from '../../components/AgroferiaCliente/Menu';
import Heading from '../../components/Vegefoods/Heading';
import ProductHistoric from '../../components/AgroferiaCliente/ProductHistoric';
import FooterComponent from '../../components/AgroferiaCliente/FooterComponent';
import APIFerias from '../../services/FairsService';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';




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
            fechaCompra:null
        };
        this.updateMontos = this.updateMontos.bind(this);
        this.handleBasket = this.handleBasket.bind(this);
        this.pad = this.pad.bind(this);

    }

    async updateMontos(evt,id,cantidad,total) {
        console.log("2:",id,cantidad,total)
        var newcantidades= this.state.cantidades
        var newtotales= this.state.totales
        newcantidades[id]=parseInt(cantidad)
        newtotales[id]=parseFloat(total)
        console.log(newcantidades)
        console.log(newtotales)

        this.setState({
            cantidades: newcantidades,
            totales: newtotales
        })
        console.log("cant",this.state.cantidades)
        console.log("tot",this.state.totales)
        
        var i;

        await this.setState({
            total: 0
          });

        for (i = 0; i < this.state.cantidades.length; i++) {

                await this.setState({
                    total: this.state.total + this.state.totales[i]
                    
                    
                })
                
            
              }

        await this.setState({
            subtotal: (this.state.total / 1.18).toFixed(2),
            igv: (this.state.total - this.state.total / 1.18).toFixed(2)
                
                
            })
      
    }

    handleBasket(){
        localStorage.setItem('subtotal',this.state.subtotal);
        localStorage.setItem('total',this.state.total);
        localStorage.setItem('descuento',this.state.descuento);
        APIFerias.put('/Despliegue/api/pedido/' + this.state.idPedido + '/reservado')
        .then(response => {
            console.log("cambio de estado de pedido a reservado");

        })
    }


    componentDidMount() {
        if (sessionStorage.getItem("idCliente")) {
            this.state.idCliente = sessionStorage.getItem("idCliente");
            console.log("idCliente: ",this.state.idCliente);

            //traer el pedido actual del idCliente correspondiente para obtener el idPedido que usaremos luego
            APIFerias.get('Despliegue/api/pedido/' + this.state.idCliente)
                .then(res=> {
                    console.log("dentro de primer GET",res.data);
                    this.setState({
                        orden:res.data.idPedido,
                        fechaCompra: res.data.fecha,
                        fechaCompra: res.data.estado,
                    });
                    //traer el detallePedido del idPedido, el cual es el actual
                    APIFerias.get('Despliegue/api/pedido/' + res.data.idPedido + '/detalle')
                        .then(response => {
                            const detalless = response.data;
                            this.state.idPedido = res.data.idPedido;
                            this.setState({ detalles:detalless })
                            console.log("ACA",this.state.detalles);
                            console.log("ACA",this.state.detalles);

                            var arrayAux=this.state.detalles;

                            arrayAux=arrayAux.map(function(e,index){
                                e.index=index;
                                return e
                            });
                            this.setState({
                                detalles:arrayAux
                            });
                            var i;
                            for (i = 0; i < this.state.detalles.length; i++) {
                                this.setState({ 
                                    precios: this.state.precios.concat([this.state.detalles[i].monto]),
                                    cantidades: this.state.cantidades.concat([this.state.detalles[i].cantidad]),
                                    totales: this.state.totales.concat([this.state.detalles[i].monto*this.state.detalles[i].cantidad]),
                                    num:this.state.precios.concat([i])
                                })
                                this.setState({
                                    total: this.state.total+ this.state.detalles[i].cantidad*this.state.detalles[i].monto
                                })
                                
                            
                              }
                              this.setState({
                                subtotal: (this.state.total / 1.18).toFixed(2),
                                igv: (this.state.total - this.state.total / 1.18).toFixed(2) 
                            })



                            });
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
                            <div className="col-md-12">
                                <table className="table">
                                    <thead className="thead-primary">
                                        <tr className="text-center">
                                            <th>N° Orden</th>
                                            <th>&nbsp;</th>
                                            <th>Estado de tu compra</th>
                                            <th>Fecha de Compra</th>
                                            <th>Total</th>
                                            <th>&nbsp;</th>


                                        </tr>   
                                    </thead>
                                    <tbody>
                                    <tr className="text-center">
                                            <th>{this.pad(this.state.orden,5)}</th>
                                            <th>&nbsp;</th>
                                            <th>{this.state.estado}</th>
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                    
                                    {this.state.detalles.map(detalle => <ProductHistoric  triggerParentUpdate={this.updateMontos} idDetalle={detalle.index} idProducto={detalle.idProducto} cantidad={detalle.cantidad} monto={detalle.monto}/>)}
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
