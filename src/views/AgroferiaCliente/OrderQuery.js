import React from 'react';
import Menu from '../../components/AgroferiaCliente/Menu';
import FooterComponent from '../../components/AgroferiaCliente/FooterComponent';
import FairHeading from '../../components/Vegefoods/FairHeading';
import {Form,Button} from 'react-bootstrap';
import Swal from 'sweetalert2';
import APIFerias from '../../services/FairsService';

class OrderQuery extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            motivos:[{id:1,nombre:'seleccione un motivo'},{id:2,nombre:'Cancelación'},
            {id:3,nombre:'Producto incorrecto'},{id:4,nombre:'Producto en mal estado'},{id:5,nombre:'Otros'}],
            cliente:{},
            email:"",
            motivo:'',
            comentario:'',
            validatedComent:false,
            validatedMot:false,
        }
        this.enviarMensaje = this.enviarMensaje.bind(this);
        this.changeValidatedComent= this.changeValidatedComent.bind(this);
        this.changeValidatedMot = this.changeValidatedMot.bind(this);
    }

    componentWillMount(){
        if(sessionStorage.getItem("idCliente")!=null){
            APIFerias.get('/Despliegue/api/usuario/cliente/'+ sessionStorage.getItem("idCliente"))
            .then(res=>{
                    const client = res.data;
                    this.setState({ cliente:client})
                    console.log(client)
            })
        }
    }

    changeValidatedComent=()=>{
        let v=this.state.validatedComent;
        this.setState({
            validatedComent:!v
        })
    }

    changeValidatedMot=()=>{
        let v= this.state.validatedMot
        this.setState({
            validatedMot:!v
        })
    }
    enviarMensaje=()=>{
        
            if(this.state.comentario==''){
                this.setState({
                    validatedComent:true
                })
            }
            if(this.state.motivo==''){
                this.setState({
                    validatedMot:true
                })      
            }
        if(this.state.comentario!='' && this.state.motivo!=''){
            let info=        
                {	idCliente: parseInt(sessionStorage.getItem("idCliente")),
                    tipoReclamo: this.state.motivo,
                    comentario:this.state.comentario
                }

            APIFerias.post('/Despliegue/api/usuario/cliente/sendConfirmacionReclamo',info)
            .then(res=>{
                Swal.fire({
                    type: 'success',
                    title: 'Gracias por realizar su reclamo',
                    text: 'Caser@ '+ this.state.cliente.nombres +' '+ this.state.cliente.apellidoPaterno+'. Nos comunicaremos con usted lo más rápido posible',
                    onClose: window.location='/historial'
                });
            }).catch(res=>{
                Swal.fire({
                    type: 'error',
                    title: 'Lo sentimos',
                    text: 'Caser@ '+ this.state.cliente.nombres +' '+ this.state.cliente.apellidoPaterno+'. No pudimos procesar su reclamo',
                    onClose: window.location='/historial'
                });
            })
        }
    }

    onChangeMotivo(event){
        
        this.setState({
            motivo: event.target.value.substr(0,50)
          });
    }

    onChangeComentario(event){
        
        this.setState({
            comentario: event.target.value.substr(0,1000)
          });
    }

   
    render(){
        return(
            <div className="Stores">
                <Menu fairId={sessionStorage.getItem('idFeria')}/>
                <FairHeading title="Consultas y Sugerencias" imageUrl="../images/agroferia_tienda1.jpg" />
                <section className="ftco-section">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <form action="#" className="billing-form">
                            <h3 className="mb-4 billing-heading">Realiza tu reclamo</h3>
                            <h6>Tu opinión es muy importante para nosotros</h6>
                                <div className="row align-items-end">
                                    <div className="col-md-12">
                                    <div className="form-group">
                                    <Form noValidate validated={this.state.validatedMot} onSudmit={()=>this.enviarMensaje()} >
                                        
                                            <Form.Label>Motivo</Form.Label>
                                            <Form.Control required as="select"  value={this.state.motivo} onChange={this.onChangeMotivo.bind(this)}>
                                                {this.state.motivos.map(tipo=><option>{tipo.nombre}</option>)}
                                            </Form.Control>
                                            <Form.Control.Feedback type="invalid">Por favor ingrese el motivo de su reclamo</Form.Control.Feedback>
                                       
                                    </Form>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="firstname">Nombres</label>
                                            <input disabled type="text" className="form-control" value={this.state.cliente.nombres}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="firstname">Apellidos</label>
                                            <input disabled type="text" className="form-control" value={this.state.cliente.apellidoPaterno} />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label for="lastname">Documento de Identidad</label>
                                            <input disabled type="text" className="form-control" value={this.state.cliente.dni}/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label for="lastname">Correo electrónico</label>
                                            <input disabled type="text" className="form-control" value={this.state.cliente.correo}/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                        <Form noValidate validated={this.state.validatedComent} onSudmit={()=>this.enviarMensaje()} >   
                                            <Form.Label>Comentarios</Form.Label>
                                                <Form.Control 
                                                required
                                                as="textarea" 
                                                rows="3" 
                                                placeholder="Ingrese su comentario" 
                                                value={this.state.comentario} 
                                                onChange={this.onChangeComentario.bind(this)}/>
                                            <Form.Control.Feedback type="invalid">
                                            Por favor ingrese un comentario
                                            </Form.Control.Feedback>
                                        </Form>
                                        </div>
                                    </div>
                                    <div className="w-100">
                                    <div className="col-md-12">
                                            <Button className="btn btn-primary py-3 px-4" size="lg" block onClick={()=>this.enviarMensaje()}>Enviar</Button>
                                    </div></div>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
                </section>
                <FooterComponent/>
            </div>
        )
    }
}

export default OrderQuery;