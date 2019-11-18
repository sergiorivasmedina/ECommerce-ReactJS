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
            motivos:[{id:1,nombre:'seleccione un motivo'},{id:2,nombre:'Sugerencia'},
            {id:3,nombre:'Consulta'},{id:4,nombre:'Reclamo'},{id:5,nombre:'Felicitaciones'},{id:6,nombre:'Otro'}],
            cliente:{},
            email:"",
            motivo:"",
            comentario:"",
        }
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

    enviarMensaje(){
        let infoMail={
            nombre:this.state.cliente.nombres + this.state.cliente.apellidoPaterno,
            email:this.state.email,
            motivo:this.state.motivo,
            comentario:this.state.comentario
        }
        Swal.fire({
            type: 'success',
            title: 'Gracias por realizar su ' + this.state.motivo,
            text: 'Casero '+ this.state.cliente.nombres +' '+ this.state.cliente.apellidoPaterno+'. Nos comunicaremos con usted lo más rápido posible',
        });
    }

    onChangeMotivo(event){
        console.log("Motivo:",event.target.value.substr(0,30))
        this.setState({
            motivo: event.target.value.substr(0,20)
          });
    }

    onChangeComentario(event){
        console.log("COmentario:",event.target.value.substr(0,250))
        this.setState({
            comentario: event.target.value.substr(0,250)
          });
    }

    render(){
        return(
            <div className="Stores">
                <Menu/>
                <FairHeading title="Consultas y Sugerencias" imageUrl="../images/agroferia_tienda1.jpg" />
                <section className="ftco-section">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <form action="#" className="billing-form">
                            <h3 className="mb-4 billing-heading">Realiza tu consulta/reclamo</h3>
                            <h6>Tu opinión es muy importante para nosotros</h6>
                                <div className="row align-items-end">
                                    <div className="col-md-12">
                                    <div className="form-group">
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Tipo de consulta</Form.Label>
                                            <Form.Control as="select" value={this.state.motivo} onChange={this.onChangeMotivo.bind(this)}>
                                                {this.state.motivos.map(tipo=><option>{tipo.nombre}</option>)}
                                            </Form.Control>
                                        </Form.Group>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="firstname">Nombres</label>
                                            <input type="text" className="form-control" placeholder={this.state.cliente.nombres}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="firstname">Apellidos</label>
                                            <input type="text" className="form-control" placeholder={this.state.cliente.apellidoPaterno} />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label for="lastname">Documento de Identidad</label>
                                            <input type="text" className="form-control" placeholder={this.state.cliente.dni}/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label for="lastname">Correo electrónico</label>
                                            <input type="text" className="form-control" placeholder={this.state.cliente.correo}/>
                                        </div>
                                    </div><div className="col-md-12">
                                        <div className="form-group">
                                            <label for="lastname">Confirmar correo electrónico</label>
                                            <input type="text" className="form-control" placeholder={this.state.cliente.correo}/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Comentarios</Form.Label>
                                        <Form.Control as="textarea" rows="3" placeholder="Ingrese su comentario" value={this.state.comentario} onChange={this.onChangeComentario.bind(this)}/>
                                    </Form.Group>
                                    </div>
                                    </div>
                                    <div className="w-100">
                                    <div className="col-md-12">
                                            <Button className="btn btn-primary py-3 px-4" size="lg" block onClick={this.enviarMensaje.bind(this)}>Enviar</Button>
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