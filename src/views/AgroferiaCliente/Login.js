import React from 'react';
import {Form,Row, Container,Col,Button,Image,Tabs,Tab} from 'react-bootstrap';


class Login extends React.Component{
    render(){
        return(
            <div>
            <img className="img-fluid" src="../images/AgroferiaCliente/logoap.png" alt="Colorlib Template"></img>
            <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
            <Tab eventKey="Login" title="Login">
            <Container>
                <Row className="justify-content-md-center">
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontalEmail"><h3>Bienvenido Casero</h3></Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalEmail"><h4>Inicie sesión</h4></Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalEmail"><Form.Control type="email" placeholder="Correo Electrónico" /></Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalEmail"><Form.Control type="password" placeholder="Contraseña" /></Form.Group>
                        <Form.Group as={Row}><Col sm={{ span: 10, offset: 2 }}><Button type="submit">Ingresar</Button></Col></Form.Group>
                    </Form>
                </Row>
            </Container>
            </Tab>
            <Tab eventKey="Registro" title="Registro">
                
            </Tab>
            </Tabs>
            </div>

        )
    }
}

export default Login;