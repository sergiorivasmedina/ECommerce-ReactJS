import React from 'react';
import Menu from '../../components/AgroferiaCliente/Menu';
import Heading from '../../components/Vegefoods/Heading';
import FooterComponent from '../../components/AgroferiaCliente/FooterComponent';
import FormCard from '../../components/AgroferiaCliente/FormCard';
import 'react-credit-cards/es/styles-compiled.css';
import Swal from 'sweetalert2';
import APIFerias from '../../services/FairsService';

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
            
          }
        };
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
        this.setState({
            status:true
        });
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
            if(this.state.cvc.length<3){
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
                this.closeModal();
            }
        
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
                                                    <label>Culqi</label>
                                                </div>
                                            </div>
                                        </div>
                                    <p><a href="#"className="btn btn-primary py-3 px-4" onClick={this.openModal.bind(this)}>Hacer pedido</a></p>
                                    <FormCard  status={this.state.status} closeModal={this.closeModal.bind(this)} 
                                    handleInputFocus={this.handleInputFocus.bind(this)} handleInputChange={this.handleInputChange.bind(this)}
                                    handleCheckout={this.handleCheckout.bind(this)}
                                    cvc={this.state.cvc}
                                    expiry={this.state.expiry}
                                    focus={this.state.focus}
                                    name={this.state.name}
                                    number={this.state.number}
                                    validatednumber={this.state.validatednumber}
                                    validatedcvc={this.state.validatedcvc}
                                    validatedexpiry={this.state.validatedexpiry}
                                    total={localStorage.getItem('total')}
                                    ></FormCard>
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