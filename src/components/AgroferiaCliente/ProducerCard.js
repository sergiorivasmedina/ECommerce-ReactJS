import React from 'react';

class ProducerCard extends React.Component {
    render() {
        let status;



        return (
            <div className="col-lg-3 col-6">
                <div className="product p-3 pl-5 pr-5">
                    <a href="#" className="img-prod"><img className="img-fluid" src={this.props.imageUrl} alt="Colorlib Template" />
                        <div className="overlay"></div>
                    </a>
                    <div className="text pt-3 text-center">
                        <h3><a href="#">{this.props.producerName}</a></h3>
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