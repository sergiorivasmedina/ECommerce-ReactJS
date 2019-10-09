import React from 'react';
import { Form, Row, Container, Col, Button, Image, Tabs, Tab } from 'react-bootstrap';
import MenuFairComponent from '../../components/AgroferiaCliente/MenuFairsComponent';
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            password: '',
        };


        this.handleMail = this.handleMail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);


    };

    handleMail(event) {
        this.setState({ mail: event.target.value });
    };

    handlePassword(event) {
        this.setState({ password: event.target.value });
    };




    handleRegistro = (event) => {
        console.log(this.state);
        console.log("hola");
        // if (event.target.value !== this.state.formBasicPassword2) {
        //     console.log('errdeeor');
        //     this.setState({ confirmPassword: event.target.value })
        // }
    };


    render() {
        return (
            <div>
                <MenuFairComponent></MenuFairComponent>

                <div class="d-flex justify-content-center">
                    <div class="w-50 p-3 ">
                        <Form>
                            <Form.Group className="text-center"><h3>Bienvenido Casero</h3></Form.Group>
                            <Form.Group className="text-center"><h4>Inicia Sesión</h4></Form.Group>

                            <Form.Group as={Row} controlId="formBasicEmail2">
                                <Form.Label column sm="2">Correo</Form.Label>
                                <Col sm="10"><Form.Control required type="email" onChange={this.handleMail} /></Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPasswordd">
                                <Form.Label column sm="2">Contraseña</Form.Label>
                                <Col sm="10"><Form.Control required type="password" onChange={this.handlePassword} /></Col>
                            </Form.Group>


                            <Form.Group className="text-center"><h1>.....</h1></Form.Group>

                            <Form.Group className="text-center"><h4>¿Eres un nuevo casero?</h4></Form.Group>
                            <div className="text-center">
                                <Button href = "/registro" variant="primary">Regístrate</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;