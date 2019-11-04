import React from 'react';
import Menu from '../../components/AgroferiaCliente/Menu';
import Navigator from '../../components/Vegefoods/Navigator';
import Heading from '../../components/Vegefoods/Heading';
import ProductBasket from '../../components/AgroferiaCliente/ProductBasket';
import FooterComponent from '../../components/AgroferiaCliente/FooterComponent';
import APIFerias from '../../services/FairsService';
import {Link} from 'react-router-dom';



class Basket extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            idUsuario: null,
            idCliente: null,
            idPedido: null,
            detalles:[],
            subtotal:0,
            descuento:0,
            total:0,
            IGV:0,
        };
    }



    componentWillMount(){
        localStorage.setItem('subtotal',this.state.subtotal);
        localStorage.setItem('total',this.state.total);
        localStorage.setItem('descuento',this.state.descuento);
    }


    componentDidMount() {
        if (sessionStorage.getItem("idCliente")) {
            this.state.idCliente = sessionStorage.getItem("idCliente");
            console.log("idCliente: ",this.state.idCliente);

            //traer el pedido actual del idCliente correspondiente para obtener el idPedido que usaremos luego
            APIFerias.get('Despliegue/api/pedido/' + this.state.idCliente)
                .then(res=> {
                    console.log("dentro de primer GET",res.data);
                    //traer el detallePedido del idPedido, el cual es el actual
                    APIFerias.get('Despliegue/api/pedido/' + res.data.idPedido + '/detalle')
                        .then(response => {
                            console.log("dentro del segundo GET", response.data);
                            const detalless = response.data;
                            console.log(detalless);
                            this.setState({ detalles:detalless })
                            
                            });
                });
                
        }

    }

    componentWillUpdate(){

    }

    

    render() {
        return (
            <div className="Stores">
                <Menu />
                <Heading title="Canasta de compras" imageUrl="../images/agroferia_tienda1.jpg" />
                <section className="pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h4 className="heading">Resumen de pedido</h4>
                            </div>
                            <div className="col-md-12">
                                <table className="table">
                                    <thead className="thead-primary">
                                        <tr className="text-center">
                                            <th>&nbsp;</th>
                                            <th>&nbsp;</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    {this.state.detalles.map(detalle => <ProductBasket idProducto={detalle.idProducto} cantidad={detalle.cantidad} monto={detalle.monto}/>)}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-9">
                                <p>Entrega (recojo en tienda): Gratis</p>
                                <p>Fecha de recojo: Domingo 2/11/2019</p>
                            </div>
                            <div className="col-md-3 text-right">
                                <p>Subtotal: S/.{this.state.subtotal}</p>
                                <p>Descuento: S/.{this.state.descuento}</p>
                                <p>IGV: S/.{this.state.IGV}</p>
                                <hr></hr>
                                <p>Total: S/{this.state.total}</p>
                            </div>
                            <div className="col-md-12 mb-5">
                                <Link  to={"/pago"} >
                                    <button class="btn btn-primary py-3 px-4 pl-2 pr-2" 
                                    >Continuar <i></i></button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </section>

                <FooterComponent />
            </div>
        );
    }

}

export default Basket;
