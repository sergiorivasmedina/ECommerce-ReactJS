import React from 'react';
import ModalProducer from './ModalProducer';


class ProducerCard extends React.Component {
    
    constructor(props){
        super(props);
        this.state ={
            status:false
        };
    }

    openModal(){
        this.setState({
            status:true
        });
    }

    closeModal = () =>{
        this.setState({
            status:false
        });
    }
    render() {
        var producerName = this.props.producerName;
        if (producerName.length > 22) {
            producerName = this.props.producerName.substring(0,22).concat('...');
        }
        return (
            <div className="col-lg-3 col-6">
                <div className="product p-3 pl-5 pr-5">
                    <a href="#" className="img-prod"><img className="img-fluid" src={this.props.imageUrl} alt="Colorlib Template" />
                        <div className="overlay"></div>
                    </a>
                    <div className="text pt-3 text-center">
                        <h3><a href="#" onClick={this.openModal.bind(this)}>{this.props.producerName}</a>
                        <ModalProducer coment={this.props.coment} image={this.props.imageUrl} name={producerName} status={this.state.status} closeModal={this.closeModal.bind(this)}></ModalProducer>
                        </h3>
                    </div>
                    <div className="text text-center">
                        <p>{this.props.producerDescription}</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default ProducerCard;