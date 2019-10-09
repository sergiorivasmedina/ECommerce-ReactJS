import React from 'react';
import { Form, Row, Container, Col, Button, Image, Tabs, Tab } from 'react-bootstrap';
import MenuFairComponent from '../../components/AgroferiaCliente/MenuFairsComponent';
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";


class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            names: '',
            lastnames: '',
            mail: '',
            password: '',
            confirmedpassword: '',
            birthDate: new Date(),
            gender: '',
            isPaswordCorrect: true

        };

        this.handleNames = this.handleNames.bind(this);
        this.handleLastNames = this.handleLastNames.bind(this);
        this.handleMail = this.handleMail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
        this.handleBirthDate = this.handleBirthDate.bind(this);
        this.handleGender = this.handleGender.bind(this);

    };

    handleNames(event) {
        this.setState({ names: event.target.value });
    };

    handleLastNames(event) {
        this.setState({ lastnames: event.target.value });
    };

    handleMail(event) {
        this.setState({ mail: event.target.value });
    };

    handlePassword(event) {
        this.setState({ password: event.target.value });
    };

    handleConfirmPassword(event) {
        this.setState({ confirmedPassword: event.target.value });
    };

    handleGender(event) {
        this.setState({ gender: event.target.value });
    };

    handleBirthDate = date => {
        this.setState({
            birthDate: date
        });
    };




    handleRegistro = (event) => {
        // console.log(this.state);

        const { names, lastnames, mail, password, confirmedpassword, birthDate, gender,isPaswordCorrect } = this.state;
        // // perform all neccassary validations
        // if (password !== confirmedpassword) {
        //     //alert("Passwords don't match");
        //     this.setState({
        //         isPaswordCorrect: false
        //     });
        // } else { 
        //     // USAR API
        // }
        // console.log(this.state);


    };





    render() {
        return (
            <div>
                <MenuFairComponent></MenuFairComponent>

                <div class="d-flex justify-content-center">
                    <div class="w-50 p-3 ">
                        <Form>

                            <Form.Group className="text-center"><h3>Regístrate</h3></Form.Group>

                            <Form.Group as={Row} controlId="formname">
                                <Form.Label column sm="2">Nombres</Form.Label>
                                <Col sm="10">
                                    <Form.Control required type="name" onChange={this.handleNames} />

                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formlastname">
                                <Form.Label column sm="2">Apellidos</Form.Label>
                                <Col sm="10"><Form.Control required type="Last name" onChange={this.handleLastNames} /></Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formBasicEmail2">
                                <Form.Label column sm="2">Correo</Form.Label>
                                <Col sm="10"><Form.Control required type="email" onChange={this.handleMail} /></Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPasswordd">
                                <Form.Label column sm="2">Contraseña</Form.Label>
                                <Col sm="10"><Form.Control required type="password" onChange={this.handlePassword} /></Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="FormconfirmPassword" >
                                <Form.Label column sm="2">Confirmar Contraseña</Form.Label>
                                <Col sm="10">
                                    <Form.Control required type="password" onChange={this.handleConfirmPassword} />
                                    {/* <div>
                                    {String(this.isPaswordCorrect)}+{this.isPaswordCorrect ? 'yes' : 'not'}
                                    </div> */}
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formbirthdate">
                                <Form.Label column sm="2">Fecha de Nacimiento </Form.Label>
                                <Col sm="10"><DatePicker selected={this.state.birthDate} onChange={this.handleBirthDate} /></Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formgender">
                                <Form.Label column sm="2">Género </Form.Label>
                                <Col sm="10">
                                    <Form.Control required as="select" onChange={this.handleGender} >
                                        <option selected>Elegir género...</option>
                                        <option>Femenino</option>
                                        <option>Masculino</option>
                                        <option>Prefiero no decirlo</option>

                                    </Form.Control>
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