import React from 'react';
import { Form, Row, Container, Col, Button, Image, Tabs, Tab } from 'react-bootstrap';
import Menu from '../../components/AgroferiaCliente/Menu';
import DatePicker from "react-datepicker";
import APIFerias from '../../services/FairsService'
import Swal from 'sweetalert2';
import FieldGroup from "../../components/PhotoHandler/FieldGroup";


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
            dni: '',
            dnicorrect: true,
            phone: '',
            phonecorrect: true,
            mail: '',
            mailcorrect: true,
            user: '',
            usercorrect: true,
            password: '',
            passwordcorrect: true,
            confirmedpassword: '',
            isPaswordCorrect: true,
            address: '',
            addressCorrect: true,
            city: '',
            cityCorrect: true

        };



        this.handleNames = this.handleNames.bind(this);
        this.handleLastNames1 = this.handleLastNames1.bind(this);
        this.handleLastNames2 = this.handleLastNames2.bind(this);
        this.handleDni = this.handleDni.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleMail = this.handleMail.bind(this);
        this.handleUser = this.handleUser.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
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

    async handleAddress(event) {
        this.setState({ address: event.target.value });
        await this.setState({ address: event.target.value });
        if (this.state.address.length < 2 || this.state.address.length > 50){
            this.setState({
                addressCorrect: false
            });
        } else {
            this.setState({
                addressCorrect: true
            });
        }
    };

    async handleCity(event) {
        await this.setState({ city: event.target.value });
        if (this.state.city.length < 2 || this.state.city.length > 50) {
            this.setState({
                cityCorrect: false
            });
        } else {
            this.setState({
                cityCorrect: true
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
            address,
            addressCorrect,
            city,
            cityCorrect,
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
            namescorrect: true,
            lastname1correct: true,
            lastname2correct: true,
            dnicorrect: true,
            phonecorrect: true,
            addressCorrect: true,
            cityCorrect: true,
            mailcorrect: true,
            usercorrect: true,
            passwordcorrect: true

        });
        if (names.length < 2 || names.length > 50) {
            this.setState({
                namescorrect: false
            });
            allcorrect = false;
        }

        if (lastname1.length < 2 || lastname1.length > 50) {
            this.setState({
                lastname1correct: false
            });
            allcorrect = false;
        }

        if (lastname2.length < 2 || lastname2.length > 50) {
            this.setState({
                lastname2correct: false
            });
            allcorrect = false;
        }

        if (dni == "" || dni.length != 8) {
            this.setState({
                dnicorrect: false
            });
            allcorrect = false;
        }

        if (city.length < 2 || city.length > 50) {
            this.setState({
                cityCorrect: false
            });
            allcorrect = false;
        }
        
        if (phone.length < 5 || phone.length > 15) {
            this.setState({
                phonecorrect: false
            });
            allcorrect = false;
        }
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        if (mail.length < 5 || mail.length > 50 || !(re.test(mail.toLowerCase()))) {
            this.setState({
                mailcorrect: false
            });
            allcorrect = false;
        }

        if (address.length < 2 || address.length > 50) {
            this.setState({
                addressCorrect: false
            });
            allcorrect=false;
        }


        if (allcorrect) {
            this.setState({
                isPaswordCorrect: true,
                namescorrect: true,
                lastname1correct: true,
                lastname2correct: true,
                dnicorrect: true,
                phonecorrect: true,
                mailcorrect: true,
                addressCorrect: true,
                cityCorrect: true,
                usercorrect: true,
                passwordcorrect: true

            });
            console.log(address);
            console.log(city);
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
                direccion: address,
                ciudad: city,
                fechaRegistro: '2019-10-03',
                dni: dni
            };
            //llamamos el metodo post del api
            APIFerias.post('/Despliegue/api/usuario/cliente/modificar', dataAPI)
                .then(response => {
                    console.log("buena", response);
                    Swal.fire({
                        type: 'success',
                        title: 'Enhorabuena ' + names,
                        text: 'Usuario modificado correctamente',
                        onClose: window.location = '/'
                    })
                }).catch(error => {
                    console.log(dataAPI);
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: error.response.data.mensaje,
                    })
                    console.log("mala", error.response.data.mensaje);
                })




        } else {
            window.scrollTo(0, 0)

        }


    };

    componentDidMount() {
        window.scrollTo(0, 0);
        if (sessionStorage.getItem("idCliente")) {
            var idUSer = sessionStorage.getItem("idCliente");


            APIFerias.get('/Despliegue/api/usuario/cliente/' + idUSer)
                .then(res => {
                    const client = res.data;
                    this.setState({
                        client: client,
                        names: client.nombres,
                        lastname1: client.apellidoPaterno,
                        lastname2: client.apellidoMaterno,
                        phone: client.telefono,
                        mail: client.correo,
                        user: client.username,
                        password: client.password,
                        dni: client.dni,
                        address: client.direccion,
                        city: client.ciudad,
                        idCliente: client.idCliente,
                        idPersona: client.idPersona,
                        idUsuario: client.idUsuario,
                        foto: client.foto
                    })
                })
        }


    }





    render() {
        return (
            <div>
                <Menu fairId={sessionStorage.getItem('idFeria')}></Menu>

                <div className="d-flex justify-content-center">
                    <div className="w-50 p-3 ">
                        <Form>

                            <Form.Group className="text-center"><h3>Información del Casero</h3></Form.Group>
                            {/*
                            <div className="justify-content-center imagePerfil">
                                <img src={this.state.foto} style={{ width: '20vh' }} />
                                {!this.state.foto &&
                                    <img src="images/userDefault.png" style={{ width: '20vh' }} />
                                }
                                <FieldGroup
                                    id="formControlsText"
                                    type="file"
                                    label="Cambiar Foto:"// Poner descripción
                                    placeholder="Cambiar foto"
                                    onChange={(e) => { this.setState({ fotoModificar: e.target.files[0] }) }}
                                />
                            </div>*/}
                            <Form.Group className="text-left"><h6 className="textRequired">* : Campos obligatorios</h6></Form.Group>
                            
                            <Form.Group as={Row} controlId="formname">
                                <Form.Label column sm="2">Nombres*</Form.Label>
                                <Col sm="10">
                                    <Form.Control required type="name" value={this.state.names} onChange={this.handleNames} className={this.state.namescorrect ? '' : 'is-invalid'}/>
                                    <span className="invalid-feedback">
                                        {this.state.namescorrect ? '' : 'El nombre debe tener entre 2 y 50 caracteres'}
                                    </span>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formlastname1">
                                <Form.Label column sm="2">Apellidos* </Form.Label>
                                <Col sm="5"><Form.Control required type="Last name1" className={this.state.lastname1correct ? '' : 'is-invalid'} value={this.state.lastname1} onChange={this.handleLastNames1} />
                                    <span className="invalid-feedback">
                                        {this.state.lastname1correct ? '' : 'El apellido paterno debe tener entre 2 y 50 caracteres'}
                                    </span>
                                </Col>
                                <Col sm="5"><Form.Control required type="Last name2" value={this.state.lastname2} onChange={this.handleLastNames2} className={this.state.lastname2correct ? '' : 'is-invalid'}/>
                                    <span className="invalid-feedback">
                                        {this.state.lastname2correct ? '' : 'El apellido materno debe tener entre 2 y 50 caracteres'}
                                    </span>
                                </Col>
                            </Form.Group>



                            <Form.Group as={Row} controlId="formBasicdni">
                                <Form.Label column sm="2">DNI*</Form.Label>
                                <Col sm="5"><Form.Control required type="number" value={this.state.dni} onChange={this.handleDni} className={this.state.dnicorrect ? '' : 'is-invalid'} />
                                <span className="invalid-feedback">
                                    {this.state.dnicorrect ? '' : 'El DNI debe tener 8 dígitos'}
                                </span>
                                </Col>
                            </Form.Group>


                            <Form.Group as={Row} controlId="formBasictelef">
                                <Form.Label column sm="2">Teléfono*</Form.Label>
                                <Col sm="5"><Form.Control required type="number" value={this.state.phone} onChange={this.handlePhone} className={this.state.phonecorrect ? '' : 'is-invalid'}/>
                                <span className="invalid-feedback">
                                     {this.state.phonecorrect ? '' : 'El teléfono debe tener entre 5 y 15 dígitos'}
                                </span>

                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formBasicEmail2">
                                <Form.Label column sm="2">Correo*</Form.Label>
                                <Col sm="10"><Form.Control required type="email" value={this.state.mail} onChange={this.handleMail} className={this.state.mailcorrect ? '' : 'is-invalid'}/>
                                <span className="invalid-feedback">
                                    {this.state.mailcorrect ? '' : 'Debe ingresar un correo válido'}
                                </span>

                                </Col>
                            </Form.Group>
                            

                            <Form.Group as={Row} controlId="formBasicAddress">
                                <Form.Label column sm="2">Dirección</Form.Label>
                                <Col sm="10"><Form.Control required type="address" value={this.state.address} onChange={this.handleAddress} className={this.state.addressCorrect ? '' : 'is-invalid'}/>
                                <span className="invalid-feedback">
                                    {this.state.addressCorrect ? '' : 'La dirección debe tener entre 2 y 50 caracteres'}
                                </span>

                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formBasicCity">
                                <Form.Label column sm="2">Ciudad</Form.Label>
                                <Col sm="10"><Form.Control required type="city" value={this.state.city} onChange={this.handleCity} className={this.state.cityCorrect ? '' : 'is-invalid'}/>
                                <span className="invalid-feedback">
                                    {this.state.cityCorrect ? '' : 'La ciudad debe tener entre 2 y 50 caracteres'}
                                </span>
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
