import React from 'react';
import { Form, Row, Container, Col, Button, Image, Tabs, Tab } from 'react-bootstrap';
import Menu from '../../components/AgroferiaCliente/Menu';
import DatePicker from "react-datepicker";
import APIFerias from '../../services/FairsService'
import Swal from 'sweetalert2';
//import FieldGroup from "components/PhotoHandler/FieldGroup";


import "react-datepicker/dist/react-datepicker.css";


class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            names: '',
            namescorrect: true,
            lastname1: '',
            lastname1correct: true,
            lastname2: '',
            lastname2correct: true,
            dni:'',
            dnicorrect: true,
            phone:'',
            phonecorrect: true,
            mail: '',
            mailcorrect: true,
            user: '',
            usercorrect: true,
            password: '',
            passwordcorrect: true,
            confirmedpassword: '',
            isPaswordCorrect: true

        };

        

        this.handleNames = this.handleNames.bind(this);
        this.handleLastNames1 = this.handleLastNames1.bind(this);
        this.handleLastNames2 = this.handleLastNames2.bind(this);
        this.handleDni = this.handleDni.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleMail = this.handleMail.bind(this);
        this.handleUser = this.handleUser.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleConfirmedPassword = this.handleConfirmedPassword.bind(this);

    };

    handleNames(event) {
        this.setState({ names: event.target.value });
    };

    handleLastNames1(event) {
        this.setState({ lastname1: event.target.value });
    };

    handleLastNames2(event) {
        this.setState({ lastname2: event.target.value });
    };

    handleDni(event) {
        this.setState({ dni: event.target.value });
    };

    handleMail(event) {
        this.setState({ mail: event.target.value });
    };

    handleUser(event) {
        this.setState({ user: event.target.value });
    };

    handlePassword(event) {
        this.setState({ password: event.target.value });        
    };

    handleConfirmedPassword(event) {
        this.setState({ confirmedpassword: event.target.value });
    };

    handleGender(event) {
        this.setState({ gender: event.target.value });
    };

    handlePhone(event) {
        this.setState({ phone: event.target.value });
    };
  





    handleModif = (event) => {
        console.log(this.state);

        const { idCliente,
        idPersona,
        idUsuario,
        names,
        namescorrect,
        lastname1,
        lastname1correct,
        lastname2,
        lastname2correct,
        dni,
        dnicorrect,
        phone,
        phonecorrect,
        mail,
        mailcorrect,
        user,
        usercorrect,
        password,
        passwordcorrect,
        confirmedpassword,
        isPaswordCorrect } = this.state;
        // perform all neccassary validations

        var allcorrect = true;
        this.setState({
            isPaswordCorrect: true,
            namescorrect:true,
            lastname1correct:true,
            lastname2correct:true,
            dnicorrect:true,
            phonecorrect:true,
            mailcorrect:true,
            usercorrect:true,
            passwordcorrect:true

        });
        if (names == ""){
            this.setState({
                namescorrect: false
            });
            allcorrect=false;
        }

        if (lastname1 == ""){
            this.setState({
                lastname1correct: false
            });
            allcorrect=false;
        }

        if (lastname2 == ""){
            this.setState({
                lastname2correct: false
            });
            allcorrect=false;
        }

        if (dni == "" || dni.length!=8){
            this.setState({
                dnicorrect: false
            });
            allcorrect=false;
        }

        if (phone == "" || dni.length < 6){
            this.setState({
                phonecorrect: false
            });
            allcorrect=false;
        }
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                 
  
        if (mail == "" || !(re.test(mail.toLowerCase()))){
            this.setState({
                mailcorrect: false
            });
            allcorrect=false;
        }




        if (allcorrect) {
            this.setState({
                isPaswordCorrect: true,
                namescorrect:true,
                lastname1correct:true,
                lastname2correct:true,
                dnicorrect:true,
                phonecorrect:true,
                mailcorrect:true,
                usercorrect:true,
                passwordcorrect:true
    
            });

            //metemos todo en una variable que luego pasará al post
            var dataAPI = {
                idCliente: idCliente,
                idPersona: idPersona,
                nombres: names,
                apellidoPaterno: lastname1,
                apellidoMaterno: lastname2,
                telefono: phone,
                correo: mail,
                idUsuario: idUsuario,
                idRol: '4',
                username: user,
                password: password,
                fechaRegistro: '2019-10-03',
                dni: dni            };
            //llamamos el metodo post del api
            APIFerias.post('/Despliegue/api/usuario/cliente/modificar', dataAPI)
                .then(response => {
                    console.log("buena", response);
                    Swal.fire({
                        type: 'success',
                        title: 'Enhorabuena ' + names,
                        text: 'Usuario modificado correctamente',
                        onClose: window.location='/'
                      })
                }).catch( error => {
                    console.log(dataAPI);
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: error.response.data.mensaje,
                      })
                    console.log("mala" , error.response.data.mensaje);
                } )
            


            
        } else {
            window.scrollTo(0, 0)

        }


    };

    componentDidMount(){

        if (sessionStorage.getItem("idUsuario")) {
            var idUSer = sessionStorage.getItem("idUsuario");
          

        APIFerias.get('/Despliegue/api/usuario/cliente/'+ idUSer)
      .then(res=> {
        const client = res.data;
        this.setState({ client:client, 
                        names:client.nombres,
                        lastname1:client.apellidoPaterno,
                        lastname2: client.apellidoMaterno,
                        phone:client.telefono,
                        mail:client.correo,
                        user:client.username,
                        password: client.password,
                        dni: client.dni,
                        idCliente: client.idCliente,
                        idPersona: client.idPersona,
                        idUsuario: client.idUsuario })
      })}

    
      }





    render() {
        return (
            <div>
                <Menu></Menu>

                <div className="d-flex justify-content-center">
                    <div className="w-50 p-3 ">
                        <Form>

                            <Form.Group className="text-center"><h3>Información del Casero</h3></Form.Group>
                            <Form.Group className="text-left"><h6 className="textRequired">* : Campos obligatorios</h6></Form.Group>
                            
                            <Form.Group as={Row} controlId="formname">
                                <Form.Label column sm="2">Nombres*</Form.Label>
                                <Col sm="10">
                                    <Form.Control required type="name" value = {this.state.names} onChange={this.handleNames} />
                                    <span>
                                        {this.state.namescorrect ? '' : 'Campo Obligatorio'}
                                    </span>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formlastname1">
                                <Form.Label column sm="2">Apellidos* </Form.Label>
                                <Col sm="5"><Form.Control required type="Last name1" value = {this.state.lastname1}onChange={this.handleLastNames1} />
                                <span>
                                        {this.state.lastname1correct ? '' : 'Campo Obligatorio'}
                                    </span>
                                    </Col>
                                <Col sm="5"><Form.Control required type="Last name2" value = {this.state.lastname2} onChange={this.handleLastNames2} />
                                <span>
                                        {this.state.lastname2correct ? '' : 'Campo Obligatorio'}
                                    </span>
                                    </Col>
                            </Form.Group>

        

                            <Form.Group as={Row} controlId="formBasicdni">
                                <Form.Label column sm="2">DNI*</Form.Label>
                                <Col sm="5"><Form.Control required type="number" value = {this.state.dni} onChange={this.handleDni} />
                                {this.state.dnicorrect ? '' : 'DNI iválido'}

                                </Col>
                            </Form.Group>
        

                            <Form.Group as={Row} controlId="formBasictelef">
                                <Form.Label column sm="2">Teléfono*</Form.Label>
                                <Col sm="5"><Form.Control required type="number" value = {this.state.phone}  onChange={this.handlePhone} />
                                {this.state.phonecorrect ? '' : 'Teléfono inválido'}

                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formBasicEmail2">
                                <Form.Label column sm="2">Correo*</Form.Label>
                                <Col sm="10"><Form.Control required type="email" value = {this.state.mail} onChange={this.handleMail} />
                                {this.state.mailcorrect ? '' : 'Correo inválido'}

                                </Col>
                            </Form.Group>

                           
                            <Form.Group as={Row} controlId="formBasicUser">
                                <Form.Label column sm="2">Usuario*</Form.Label>
                                <Col sm="10">{this.state.user}</Col>
                            </Form.Group>





                            <div className="text-center">

                                <Button variant="primary" className="btnLogin" onClick={this.handleModif}>Actualizar Información</Button>
                            </div>
                        </Form>
                    </div>
                </div>

            </div>

        )
    }
}



export default Profile;
