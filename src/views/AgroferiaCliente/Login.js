import React from 'react';
import { Form, Row, Container, Col, Button, Image, Tabs, Tab } from 'react-bootstrap';
import MenuFairComponent from '../../components/AgroferiaCliente/MenuFairsComponent';
import DatePicker from "react-datepicker";
import Swal from 'sweetalert2';
import APIFerias from '../../services/FairsService'


import "react-datepicker/dist/react-datepicker.css";


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
            password: '',
        };


        this.handleUser = this.handleUser.bind(this);
        this.handlePassword = this.handlePassword.bind(this);


    };

    handleUser(event) {
        this.setState({ user: event.target.value });
    };

    handlePassword(event) {
        this.setState({ password: event.target.value });
    };




    handleLogin = (event) => {
        var datauser = {
            username : this.state.user, 
            password : this.state.password
        }
        APIFerias.post('/Despliegue/api/usuario/cliente/autenticacion', datauser)
                .then(response => {
                    console.log("buena", response);
                    Swal.fire({
                        type: 'success',
                        title: '¡Enhorabuena!',
                        text: '¡Inicio de sesión exitoso!',
                    });

                    sessionStorage.setItem("idUsuario", response.data.idUsuario);
                    sessionStorage.setItem("idRol", response.data.idRol);

                    //para llamar el sessionStorage hacer lo siguiente:
                    //sessionStorage.getItem(idUsuario);
                    //sessionStorage.getItem(idRol);
                }).catch( error => {
                    console.log("mala" , error.response.data.mensaje);
                    console.log(this.state.user,this.state.password);

                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: '¡Usuario o Contraseña inválidos!',
                      })
                } )
        //aca login

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
                                <Form.Label column sm="2">Usuario</Form.Label>
                                <Col sm="10"><Form.Control required type="user" onChange={this.handleUser} /></Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPasswordd">
                                <Form.Label column sm="2">Contraseña</Form.Label>
                                <Col sm="10"><Form.Control required type="password" onChange={this.handlePassword} /></Col>
                            </Form.Group>

                            <div className="text-center">
                                <Button variant="primary" onClick={this.handleLogin}>Ingresar</Button>
                            </div>
                            <Form.Group className="text-center"><h1>.....</h1></Form.Group>

                            <Form.Group className="text-center"><h4>¿Eres un nuevo casero?</h4></Form.Group>
                            <div className="text-center">
                                <Button href = "/registro" variant="primary" >Regístrate</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;