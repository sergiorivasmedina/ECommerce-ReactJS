import React from 'react';

class ProductProfile extends React.Component {

    constructor(props) {
        super(props);
      
    }


    render() {
        let status;

        return (
            <div>
                <div className="row pt-5 pb-5">
                    <div className="col-lg-3 col-md-4">
                        <img className="img-fluid" src={this.props.product.imagen}
                            alt="Colorlib Template"></img>
                    </div>
                    <div className="col-lg-9 col-md-8 text-left">
                        <h3>{this.props.product.nombre}</h3>
                        <p>{this.props.product.descripcion}</p>

                    </div>
                </div>
                <div className="row text-center">
                    <p>
                        <button type="button" className="btn btn-primary">Comprar ya</button>
                    </p>
                    <p>
                        <button type="button" href="#" className="btn btn-primary">Añadir a canasta</button>
                    </p>
                </div>
            </div>
        );
    }

}

export default ProductProfile;