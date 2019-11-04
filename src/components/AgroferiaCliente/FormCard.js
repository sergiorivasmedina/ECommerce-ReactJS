import React from 'react';
import {Modal, Button,Form,Col, Row, Container} from 'react-bootstrap';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';


class FormCard extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            cvc: '',
            expiry: '',
            focus: '',
            name: '',
            number: '',
        };
    }
    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
      }
      
      handleInputChange = (e) => {
        const { name, value } = e.target;
        
        this.setState({ [name]: value });
      }
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
                    cvc={this.state.cvc}
                    expiry={this.state.expiry}
                    focus={this.state.focus}
                    name={this.state.name}
                    number={this.state.number}
                    />
                    </Col>
                    <Col xs={12} md={6}>
                    <form>
                        <input
                        type="tel"
                        name="number"
                        placeholder="Numero de tarjeta"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                        />
                    </form>
                    <form><input
                        type="tel"
                        name="name"
                        placeholder="Nombre"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                        />
                    </form>
                    <form><input
                        type="tel"
                        name="expiry"
                        placeholder="MM/AA"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                        />
                    </form>
                    <form><input
                        type="tel"
                        name="cvc"
                        placeholder="CVC"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                        />
                    </form>
                    </Col>
                </Row>
                </Container>
                </div>
                
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" size="lg" block onClick={()=>this.props.closeModal()}>Pagar</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default FormCard;