import React from 'react';
import { Form, Row, Container, Col, Button, Image, Tabs, Tab } from 'react-bootstrap';
import MenuFairComponent from '../../components/AgroferiaCliente/MenuFairsComponent';
import DatePicker from "react-datepicker";
import APIFerias from '../../services/FairsService'


import "react-datepicker/dist/react-datepicker.css";


class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            names: '',
            lastname1: '',
            lastname2: '',
            dni:'',
            phone:'',
            mail: '',
            user: '',
            password: '',
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
  





    handleRegistro = (event) => {
        console.log(this.state);

        const { names, lastname1, lastname2, dni, phone,mail,user, password, confirmedpassword,isPaswordCorrect } = this.state;
        // perform all neccassary validations
        if (password == confirmedpassword) {
            //alert("Passwords don't match");
            this.setState({
                isPaswordCorrect: true
            });

            //metemos todo en una variable que luego pasará al post
            var dataAPI = {
                idCliente: '',
                nombres: names,
                apellidoPaterno: lastname1,
                apellidoMaterno: lastname2,
                telefono: phone,
                correo: mail,
                idRol: '4',
                username: user,
                password: password,
                fechaRegistro: '2019-10-03',
                dni: dni            };
            //llamamos el metodo post del api
            APIFerias.post('/Despliegue/api/usuario/cliente/registro', dataAPI)
                .then(response => {
                    console.log("buena", response);
                }).catch( error => {
                    console.log(dataAPI);
                    console.log("mala" , error.response.data.mensaje);
                } )


            
        } else {
            this.setState({
                isPaswordCorrect: false
            });
        }
        console.log(this.state);


    };





    render() {
        return (
            <div>
                <MenuFairComponent></MenuFairComponent>

                <div className="d-flex justify-content-center">
                    <div className="w-50 p-3 ">
                        <Form>

                            <Form.Group className="text-center"><h3>Regístrate</h3></Form.Group>

                            <Form.Group as={Row} controlId="formname">
                                <Form.Label column sm="2">Nombres</Form.Label>
                                <Col sm="10">
                                    <Form.Control required type="name" onChange={this.handleNames} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formlastname1">
                                <Form.Label column sm="2">Apellidos </Form.Label>
                                <Col sm="5"><Form.Control required type="Last name1" onChange={this.handleLastNames1} /></Col>
                                <Col sm="5"><Form.Control required type="Last name2" onChange={this.handleLastNames2} /></Col>
                            </Form.Group>

        

                            <Form.Group as={Row} controlId="formBasicdni">
                                <Form.Label column sm="2">DNI</Form.Label>
                                <Col sm="10"><Form.Control required type="dni" onChange={this.handleDni} /></Col>
                            </Form.Group>
        

                            <Form.Group as={Row} controlId="formBasictelef">
                                <Form.Label column sm="2">Teléfono</Form.Label>
                                <Col sm="10"><Form.Control required type="phone" onChange={this.handlePhone} /></Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formBasicEmail2">
                                <Form.Label column sm="2">Correo</Form.Label>
                                <Col sm="10"><Form.Control required type="email" onChange={this.handleMail} /></Col>
                            </Form.Group>

                           
                            <Form.Group className="text-center"><h1>.....</h1></Form.Group>

                            <Form.Group as={Row} controlId="formBasicUser">
                                <Form.Label column sm="2">Usuario</Form.Label>
                                <Col sm="10"><Form.Control required type="user" onChange={this.handleUser} /></Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPasswordd">
                                <Form.Label column sm="2">Contraseña</Form.Label>
                                <Col sm="10"><Form.Control required type="password" onChange={this.handlePassword} /></Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="FormconfirmPassword" >
                                <Form.Label column sm="2">Confirmar Contraseña</Form.Label>
                                <Col sm="10">
                                    <Form.Control required type="password" onChange={this.handleConfirmedPassword} />
                                    {/* <span>{this.state.isPaswordCorrect == true ? 'YES' : 'NO'}</span> */}

                                    <span>
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