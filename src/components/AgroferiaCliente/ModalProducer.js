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
                    Historia:...
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={()=>this.props.closeModal()}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ModalProducer;