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

class Payment extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            status:false,
            cvc: '',
            expiry: '',
            focus: '',
            name: '',
            number: '',
            validatednumber:false,
            validatedcvc:false,
            validatedexpiry:false,
            usuario:{
            
          },
          activar:true
        };
    }
    
    componentDidMount(){
        window.Culqi.publicKey = 'pk_test_dPmYFGxhKYaCH0Bm';
        window.Culqi.init();
        console.log("Culqi:",window.Culqi);
        window.Culqi.settings({
            title: 'Agroferia',
            currency: 'PEN',
            description: 'Canasta',
            amount: localStorage.getItem('total')
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
        
    }
    componentWillMount(){
        if(sessionStorage.getItem("idCliente")!=null){
            APIFerias.get('/Despliegue/api/usuario/cliente/'+ sessionStorage.getItem("idCliente"))
            .then(res=>{
                    const client = res.data;
                    this.setState({ usuario:client})
            })
        }
        
    }

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
      }
      
    handleInputChange = (e) => {
        const { name, value } = e.target;
        
        this.setState({ [name]: value });
    }

    openModal(){
        /*this.setState({
            status:true
        });*/
        window.Culqi.open();
    }

    closeModal = () =>{
        this.setState({
            status:false,
            cvc: '',
            expiry: '',
            focus: '',
            name: '',
            number: ''
        });
    }

    handleCheckout = () =>{
            if(this.state.cvc.length<3 ){
                this.setState({
                    validatedcvc:true
                })
            }
            if(this.state.expiry.length<4){
                this.setState({
                    validatedexpiry:true
                })
            }
            if(this.state.number.length<16) {
                this.setState({
                    validatednumber:true
                })
            }
            if(this.state.cvc && this.state.expiry && this.state.number){
                Swal.fire({
                    type: 'success',
                    title: '¡Enhorabuena!',
                    text: 'Reserva realizada!',
                    onAfterClose: window.location='/'
        
                });
                window.Culqi.createToken();
                console.log("Muestra:",window.Culqi.token);
                this.closeModal();
            }
        
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
                                                <span>S/.{localStorage.getItem('subtotal')}</span>
                                            </p>
                                            <p className="d-flex">
                                                <span>Despacho</span>
                                                <span>S/.0</span>
                                            </p>
                                            <p className="d-flex">
                                                <span>Descuento</span>
                                                <span>S/.{localStorage.getItem('descuento')}</span>
                                            </p>
                                            <p className="d-flex total-price">
                                                <span>Total</span>
                                                <span>S/.{localStorage.getItem('total')}</span>
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
                                    <Button disabled={this.state.activar} href="#"className="btn btn-primary py-3 px-4" onClick={this.openModal.bind(this)}>Hacer pedido</Button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </div>
                </div>
            </section>
        <FooterComponent/>
        </div>
        )
    }
}

export default Payment;