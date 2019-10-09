import React from 'react';
import {Modal, Button} from 'react-bootstrap';

class ModalProducer extends React.Component{
    render(){
        return(
            <Modal show={this.props.status} onHide={()=>this.props.closeModal()}>
                <Modal.Header closeButton>
                    <Modal.Title>Casero {this.props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img className="img-fluid" src={this.props.image} alt="Colorlib Template" />
                    <h3>Descripción:</h3>
                    <h6>{this.props.coment}</h6>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={()=>this.props.closeModal()}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ModalProducer;