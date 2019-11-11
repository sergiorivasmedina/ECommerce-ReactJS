import React from 'react';
import Menu from '../../components/AgroferiaCliente/Menu';
import Heading from '../../components/Vegefoods/Heading';
import FooterComponent from '../../components/AgroferiaCliente/FooterComponent';
import FormCard from '../../components/AgroferiaCliente/FormCard';
import 'react-credit-cards/es/styles-compiled.css';
import Swal from 'sweetalert2';
import APIFerias from '../../services/FairsService';
import $ from 'jquery';
import {Form,Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';


class Payment extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            idPedido: null,
            status:false,
            usuario:{
            
          },
          activar:true,
          subtotal:0,
          igv:0,
          total:0,
          descuento:0,
        };
    }
    
    componentDidMount(){
        console.log("location",window.location);
        const {idPedido} = this.props.match.params;
        this.setState({
            idPedido: idPedido,
            subtotal: localStorage.getItem('subtotal'),
            total: localStorage.getItem('total')
        })
        if(idPedido!=null){
            APIFerias.get('/Despliegue/api/pedido/'+ sessionStorage.getItem("idCliente"))
            .then(res=>{
                const pedidoActual=res.data;
                const total = parseInt(pedidoActual.total);
                console.log("Pedido Actual:",pedidoActual);
                this.setState({
                    subtotal:pedidoActual.subtotal,
                    igv:pedidoActual.igv,
                    total:pedidoActual.total
                })
                window.Payment = this;
                window.Culqi.publicKey = 'pk_test_dPmYFGxhKYaCH0Bm';
                window.Culqi.init();
                window.Culqi.settings({
                    title: 'Agroferia',
                    currency: 'PEN',
                    description: 'Canasta',
                    amount: total
                });
                window.Culqi.options({
                    lang: 'auto',
                    modal: true,
                    installments: true,
                    customButton: 'Pagar',
                    style: {
                      logo: 'https://culqi.com/LogoCulqi.png',
                      maincolor: '#0ec1c1',
                      buttontext: '#ffffff',
                      maintext: '#4A4A4A',
                      desctext: '#4A4A4A'
                    }
                });

            })
            
        }
        
        if(sessionStorage.getItem("idCliente")!=null){
            APIFerias.get('/Despliegue/api/usuario/cliente/'+ sessionStorage.getItem("idCliente"))
            .then(res=>{
                    const client = res.data;
                    this.setState({ usuario:client})
            })
        }
        
    }

    openCheckout=(e)=>{
        window.Culqi.open();
        e.preventDefault();
    }

    registroExitoso(){
        APIFerias.put('/Despliegue/api/pedido/'+ this.state.idPedido +'/realizado')
        .then(res=>{
            Swal.fire({
                type: 'success',
                title: 'Tu pedido ha sido procesado correctamente',
                text: 'Gracias por tu compra',
                timer: 1500
            });
        })
        this.props.history.push("/resumen/" + this.state.idPedido);
    }

    registroFallido(){
        Swal.fire({
            type: 'error',
            title: 'Lo sentimos, su pedido no ha podido ser procesado',
            text: 'Le pedimos que lo intente nuevamente',
            onAfterClose: window.location='/canasta',
            timer: 1500
        });
    }

    selectCheckout(){
        let v=this.state.activar;
        this.setState({
            activar:!v
        })
    }

    render(){
        return(
        <div className="Stores">
            <Menu />
            <Heading title="Pago" imageUrl="../images/agroferia_tienda1.jpg" />
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-xl-7">
                        <form action="#" className="billing-form">
                            <h3 className="mb-4 billing-heading">Detalle de facturación</h3>
                                <div className="row align-items-end">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label for="lastname">Documento de Identidad</label>
                                            <input type="text" className="form-control" placeholder={this.state.usuario.dni}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="firstname">Nombres</label>
                                            <input type="text" className="form-control" placeholder={this.state.usuario.nombres}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="firstname">Apellidos</label>
                                            <input type="text" className="form-control" placeholder={this.state.usuario.apellidoPaterno} />
                                        </div>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="w-100"></div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="streetaddress">Dirección</label>
                                                <input type="text" className="form-control" placeholder="Calle y número"/>
                                            </div>
                                        </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                <input type="text" className="form-control" placeholder="Apartamento, casa, unidad, etc (opcional)"/>
                                </div>
                                </div>
                                <div className="w-100"></div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label for="towncity">Ciudad</label>
                                <input type="text" className="form-control" placeholder=""/>
                                </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="postcodezip">Código postal</label>
                                <input type="text" className="form-control" placeholder=""/>
                                </div>
                                </div>
                                <div className="w-100"></div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label for="phone">Telefono</label>
                                <input type="text" className="form-control" placeholder={this.state.usuario.telefono}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="emailaddress">Correo electrónico</label>
                                <input type="text" className="form-control" placeholder={this.state.usuario.correo}/>
                                </div>
                            </div>
                            <div className="w-100"></div>
                            <div className="col-md-12"></div>
                            </div>
                        </form>
                                </div>
                                <div className="col-xl-5">
                        <div className="row mt-5 pt-3">
                            <div className="col-md-12 d-flex mb-5">
                                <div className="cart-detail cart-total p-3 p-md-4">
                                    <h3 className="billing-heading mb-4">Total de la canasta</h3>
                                    <p className="d-flex">
                                                <span>Subtotal</span>
                                                <span>S/.{this.state.subtotal}</span>
                                            </p>
                                            <p className="d-flex">
                                                <span>IGV</span>
                                                <span>S/.{this.state.igv}</span>
                                            </p>
                                            <p className="d-flex">
                                                <span>Descuento</span>
                                                <span>S/.{this.state.descuento}</span>
                                            </p>
                                            <p className="d-flex total-price">
                                                <span>Total</span>
                                                <span>S/.{this.state.total}</span>
                                            </p>
                                            </div>
                            </div>
                            <div className="col-md-12">
                                <div className="cart-detail p-3 p-md-4">
                                    <h3 className="billing-heading mb-4">Metodo de Pago</h3>
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <div className="radio">
                                                <Form.Check type="radio" aria-label="radio 1" label="Culqi" onClick={this.selectCheckout.bind(this)}/>
                                                </div>
                                            </div>
                                        </div>
                                    <p>
                                    <Button disabled={this.state.activar} href="#"className="btn btn-primary py-3 px-4" onClick={this.openCheckout.bind(this)}>Hacer pedido</Button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </div>
                </div>
                {window.Culqi.token!=null?<div>El token existe</div>:null}
            </section>
        <FooterComponent/>
        </div>
        )
    }
}

export default Payment;