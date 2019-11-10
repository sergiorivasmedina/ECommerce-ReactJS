import React from 'react';
import {Modal, Button,Card,Col,Row,Image} from 'react-bootstrap';

class ModalProducer extends React.Component{
    render(){
        return(
            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter"
            centered
            show={this.props.status} onHide={()=>this.props.closeModal()}>
            <Modal.Body>
                        <Row className="show-grid">
                            <Col xs={12} md={6}>
                                <Image src={this.props.image} alt="Colorlib Template" thumbnail />
                            </Col>
                        <Col xs={12} md={6}>
                            <h3>Casero {this.props.name}</h3>
                            <Card className="text-center">
                            <Card.Header>Mi historia</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                El motivo por el cual empece este negocio fue ...
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                                <Button size="lg" variant="primary" onClick={()=>this.props.closeModal()}>Volver</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        </Row>
            </Modal.Body>
            </Modal>
        )
    }
}

export default ModalProducer;