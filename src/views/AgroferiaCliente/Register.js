import React from 'react';
import { Form, Row, Container, Col, Button, Image, Tabs, Tab } from 'react-bootstrap';
import MenuFairComponent from '../../components/AgroferiaCliente/MenuFairsComponent';
import APIFerias from '../../services/FairsService'
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";




import "react-datepicker/dist/react-datepicker.css";



class Register extends React.Component {
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
            isPaswordCorrect: true,
            direccion: '',
            isDireccionCorrect: true,
            ciudad: ''

        };

        this.handleNames = this.handleNames.bind(this);
        this.handleLastNames1 = this.handleLastNames1.bind(this);
        this.handleLastNames2 = this.handleLastNames2.bind(this);
        this.handleDni = this.handleDni.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleMail = this.handleMail.bind(this);
        this.handleUser = this.handleUser.bind(this);
        this.handleDireccion = this.handleDireccion.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleConfirmedPassword = this.handleConfirmedPassword.bind(this);

    };

    async handleNames(event) {
        await this.setState({ names: event.target.value });
        if (this.state.names.length < 2 || this.state.names.length > 50){
            this.setState({
                namescorrect: false
            });
        } else {
            this.setState({
                namescorrect: true
            });
        }
    };

    async handleLastNames1(event) {
        await this.setState({ lastname1: event.target.value });
        if (this.state.lastname1.length < 2 || this.state.lastname1.length > 50){
            this.setState({
                lastname1correct: false
            });
        } else {
            this.setState({
                lastname1correct: true
            });
        }
    };

    async handleLastNames2(event) {
        await this.setState({ lastname2: event.target.value });
        if (this.state.lastname2.length < 2 || this.state.lastname2.length > 50){
            this.setState({
                lastname2correct: false
            });
        } else {
            this.setState({
                lastname2correct: true
            });
        }
    };

    async handleDni(event) {
        await this.setState({ dni: event.target.value });
        if (this.state.dni == "" || this.state.dni.length!=8){
            this.setState({
                dnicorrect: false
            });
        } else {
            this.setState({
                dnicorrect: true
            });
        }
    };

    async handleMail(event) {
        await this.setState({ mail: event.target.value });
        
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (this.state.mail.length < 5 || this.state.mail.length > 50 || !(re.test(this.state.mail.toLowerCase()))){
            this.setState({
                mailcorrect: false
            });
        } else {
            this.setState({
                mailcorrect: true
            });
        }
    };

    async handleDireccion(event) {
        await this.setState({ direccion: event.target.value });
        if (this.state.direccion.length < 2 || this.state.direccion.length > 50){
            this.setState({
                isDireccionCorrect: false
            });
        } else {
            this.setState({
                isDireccionCorrect: true
            });
        }
    };


    handleUser(event) {
        this.setState({ user: event.target.value });
    };

    handlePassword(event) {
        this.setState({ password: event.target.value });    
          
    };

    async handleConfirmedPassword(event) {
        await this.setState({ confirmedpassword: event.target.value });
        if (this.state.password != this.state.confirmedpassword){
            this.setState({
                isPaswordCorrect: false
            });
        } else {
            this.setState({
                isPaswordCorrect: true
            });
        }
    };

    handleGender(event) {
        this.setState({ gender: event.target.value });
    };

    async handlePhone(event) {
        await this.setState({ phone: event.target.value });
        if (this.state.phone.length < 5 || this.state.phone.length > 15){
            this.setState({
                phonecorrect: false
            });
        } else {
            this.setState({
                phonecorrect: true
            });
        }
    };
  

    handleRegistro = (event) => {
        console.log(this.state);

        const { names,
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
        direccion,
        isDireccionCorrect,
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
            passwordcorrect:true,
            isDireccionCorrect: true

        });
        if (names.length < 2 || names.length > 50){
            this.setState({
                namescorrect: false
            });
            allcorrect=false;
        }

        if (lastname1.length < 2 || lastname1.length > 50){
            this.setState({
                lastname1correct: false
            });
            allcorrect=false;
        }

        if (lastname2.length < 2 || lastname2.length > 50){
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

        if (phone.length < 5 || phone.length > 15){
            this.setState({
                phonecorrect: false
            });
            allcorrect=false;
        }
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                 
  
        if (mail.length < 5 || mail.length > 50 || !(re.test(mail.toLowerCase()))){
            this.setState({
                mailcorrect: false
            });
            allcorrect=false;
        }

        if (direccion.length < 2 || direccion.length > 50) {
            this.setState({
                isDireccionCorrect: false
            });
            allcorrect=false;
        }

        if (password != confirmedpassword){
            this.setState({
                isPaswordCorrect: false
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
                passwordcorrect:true,
                direccioncorrect:true
    
            });

            //metemos todo en una variable que luego pasará al post
            var dataAPI = {
                idCliente: '',
                idPersona: '',
                nombres: names,
                apellidoPaterno: lastname1,
                apellidoMaterno: lastname2,
                telefono: phone,
                correo: mail,
                idUsuario: '',
                idRol: '4',
                username: user,
                password: password,
                fechaRegistro: '2019-10-03',
                dni: dni,
                foto: '',
                idClienteCulqui: '---',
                object: null,
                saldo: 0.0,
                requiereCambiarContrasena: 0,
                direccion:direccion,
                ciudad:''
            };
            //llamamos el metodo post del api
            APIFerias.post('/Despliegue/api/usuario/cliente/registro', dataAPI)
                .then(response => {
                    console.log("buena", response);

                    console.log(response);
                    sessionStorage.setItem("idUsuario", response.data.idUsuario);
                    sessionStorage.setItem("idRol", response.data.idRol);


                    Swal.fire({
                        type: 'success',
                        title: 'Bienvenido ' + names,
                        text: 'Usuario creado correctamente',
                        onClose: window.location='/login'
                      })

                    
                    
                }).catch( error => {
                    console.log(dataAPI);
                    console.log("mala" , error.response.data.mensaje);

                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: error.response.data.mensaje,
                      })
                } )
            


            
        } else {
            window.scrollTo(0, 0)

        }


    };





    render() {
        return (
            <div>
                <MenuFairComponent></MenuFairComponent>

                <div className="d-flex justify-content-center">
                    <div className="w-50 p-3 ">
                        <Form>

                            <Form.Group className="text-center"><h3>Regístrate</h3></Form.Group>
                            <Form.Group className="text-left"><h6 className="textRequired">* : Campos obligatorios</h6></Form.Group>
                            <Form.Group as={Row} controlId="formname">
                                <Form.Label column sm="2">Nombres*</Form.Label>
                                <Col sm="10">
                                    <Form.Control required type="name" onChange={this.handleNames} className={this.state.namescorrect ? '' : 'is-invalid'} />
                                    <span className="invalid-feedback">
                                        {this.state.namescorrect ? '' : 'El nombre debe tener entre 2 y 50 caracteres'}
                                    </span>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formlastname1">
                                <Form.Label column sm="2">Apellidos* </Form.Label>
                                <Col sm="5"><Form.Control required type="Last name1" onChange={this.handleLastNames1} className={this.state.lastname1correct ? '' : 'is-invalid'} />
                                <span className="invalid-feedback">
                                        {this.state.lastname1correct ? '' : 'El apellido paterno debe tener entre 2 y 50 caracteres'}
                                    </span>
                                    </Col>
                                <Col sm="5"><Form.Control required type="Last name2" onChange={this.handleLastNames2} className={this.state.lastname2correct ? '' : 'is-invalid'}/>
                                <span className="invalid-feedback">
                                        {this.state.lastname2correct ? '' : 'El apellido materno debe tener entre 2 y 50 caracteres'}
                                    </span>
                                    </Col>
                            </Form.Group>

        

                            <Form.Group as={Row} controlId="formBasicdni">
                                <Form.Label column sm="2">DNI*</Form.Label>
                                <Col sm="5"><Form.Control required type="number" onChange={this.handleDni} className={this.state.dnicorrect ? '' : 'is-invalid'}/>
                                <span className="invalid-feedback">
                                    {this.state.dnicorrect ? '' : 'El DNI debe tener 8 dígitos'}
                                </span>

                                </Col>
                            </Form.Group>
        

                            <Form.Group as={Row} controlId="formBasictelef">
                                <Form.Label column sm="2">Teléfono*</Form.Label>
                                <Col sm="5"><Form.Control required type="number"  onChange={this.handlePhone} className={this.state.phonecorrect ? '' : 'is-invalid'}/>
                                <span className="invalid-feedback">
                                    {this.state.phonecorrect ? '' : 'El teléfono debe tener entre 5 y 15 dígitos'}
                                </span>

                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formBasicEmail2">
                                <Form.Label column sm="2">Correo*</Form.Label>
                                <Col sm="10"><Form.Control required type="email" onChange={this.handleMail} className={this.state.mailcorrect ? '' : 'is-invalid'}/>
                                <span className="invalid-feedback">
                                    {this.state.mailcorrect ? '' : 'Debe ingresar un correo válido'}
                                </span>

                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formBasicDireccion">
                                <Form.Label column sm="2">Dirección*</Form.Label>
                                <Col sm="10"><Form.Control required type="direccion" onChange={this.handleDireccion} className={this.state.isDireccionCorrect ? '' : 'is-invalid'}/>
                                <span className="invalid-feedback">
                                    {this.state.isDireccionCorrect ? '' : 'La dirección debe tener entre 2 y 50 caracteres'}
                                </span>

                                </Col>
                            </Form.Group>
                           
                            <Form.Group className="text-center"><h1>.....</h1></Form.Group>

                            <Form.Group as={Row} controlId="formBasicUser">
                                <Form.Label column sm="2">Usuario*</Form.Label>
                                <Col sm="10"><Form.Control required type="user" onChange={this.handleUser} /></Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPasswordd">
                                <Form.Label column sm="2">Contraseña*</Form.Label>
                                <Col sm="10"><Form.Control required type="password" onChange={this.handlePassword} /></Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="FormconfirmPassword" >
                                <Form.Label column sm="2">Confirmar Contraseña*</Form.Label>
                                <Col sm="10">
                                    <Form.Control required type="password" onChange={this.handleConfirmedPassword} className={this.state.isPaswordCorrect ? '' : 'is-invalid'} />

                                    <span className="invalid-feedback">
                                        {this.state.isPaswordCorrect ? '' : 'Las contraseñas no coinciden'}
                                    </span>
                                </Col>
                            </Form.Group>




                            <div className="text-center">

                                <Button variant="primary" onClick={this.handleRegistro}>Registrarme</Button>
                            </div>
                        </Form>
                    </div>
                </div>

            </div>

        )
    }
}

export default Register;