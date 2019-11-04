import React from 'react';
import {Modal, Button,FormCheck,Col, Row, Container,Form} from 'react-bootstrap';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';


class FormCard extends React.Component{
     
    render(){
        return(
            <Modal 
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={this.props.status} onHide={()=>this.props.closeModal()}>
                <Modal.Header closeButton>
                    <Modal.Title>Ingrese su tarjeta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div id="PaymentForm">
                <Container>
                <Row className="show-grid">
                    <Col xs={12} md={6}>
                    <Cards
                    cvc={this.props.cvc}
                    expiry={this.props.expiry}
                    focus={this.props.focus}
                    name={this.props.name}
                    number={this.props.number}
                    />
                    </Col>
                    <Col xs={12} md={6}>
                    <Form noValidate validated={this.props.validatednumber} onSubmit={()=>this.props.handleCheckout()}>
                        <Form.Control
                        type="tel"
                        name="number"
                        placeholder="Numero de tarjeta"
                        onChange={(e)=>this.props.handleInputChange(e)}
                        onFocus={(e)=>this.props.handleInputFocus(e)}
                        maxLength="16"
                        required
                        />
                        <Form.Control.Feedback type="invalid">
                        Por favor ingrese una tarjeta valida
                        </Form.Control.Feedback>
                    </Form>
                        <br/>
                    
                        <Form.Control
                        type="tel"
                        name="name"
                        placeholder="Nombre"
                        onChange={(e)=>this.props.handleInputChange(e)}
                        onFocus={(e)=>this.props.handleInputFocus(e)}
                        />
                    
                        <br/>
                    <Form noValidate validated={this.props.validatedexpiry} onSubmit={()=>this.props.handleCheckout()}>
                        <Form.Control
                        type="tel"
                        name="expiry"
                        placeholder="MM/AA"
                        onChange={(e)=>this.props.handleInputChange(e)}
                        onFocus={(e)=>this.props.handleInputFocus(e)}
                        pattern='[0-9]{0,5}'
                        maxLength="4"
                        required
                        />
                        <Form.Control.Feedback type="invalid">
                        Por favor ingrese una fecha valida
                        </Form.Control.Feedback>
                    </Form>
                        <br/>
                    <Form noValidate validated={this.props.validatedcvc} onSubmit={()=>this.props.handleCheckout()}>    
                        <Form.Control
                        type="tel"
                        name="cvc"
                        placeholder="CVC"
                        onChange={(e)=>this.props.handleInputChange(e)}
                        onFocus={(e)=>this.props.handleInputFocus(e)}
                        maxLength="3"
                        required
                        />
                        <Form.Control.Feedback type="invalid">
                        Por favor ingrese un CVC valido
                        </Form.Control.Feedback>
                    </Form>
                    </Col>
                </Row>
                </Container>
                </div>
                
                </Modal.Body>
                <Modal.Footer>
                <Button type="submit" variant="primary" size="lg" block onClick={()=>this.props.handleCheckout()}>Pagar</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default FormCard;