import React from 'react';
import { Link } from 'react-router-dom';
import APIFerias from '../../services/FairsService';

class ProductCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            photo: null,
            store: ""
        }
    }
    componentDidMount() {

        
    }

    render() {
        let status;
        let pricing;
        let image;

        if (this.props.imageUrl == null || this.props.imageUrl == "") {

            image = "../images/bg_1.jpg";
        } else {
            image = this.props.imageUrl;
        }

        if (this.props.discount == "0") {

            pricing = <p className="price"><span>S/.{this.props.price} x {this.props.unit}</span></p>;
        }
        else {
            var discountPrice = (100 - parseFloat(this.props.discount)) * parseFloat(this.props.price) / 100;
            discountPrice = discountPrice.toString();
            status = <span className="status">{this.props.discount}%</span>;
            pricing = <p className="price"><span className="mr-2 price-dc">S/.{this.props.price}</span><span className="price-sale">S/.{discountPrice} x {this.props.unit}</span></p>;
        }

        APIFerias.get('/Despliegue/api/tienda/perfil/' + this.props.store)
            .then(res => {
                const store = res.data;
                this.setState({ store: store.empresa.nombreComercial });
            });
        if (this.state.store != "") {
            console.log(this.state.store);
            var tienda = <div className="text-center">

                <p>Tienda: {this.state.store}</p>
            </div>;
        }

        var url = "detalleProducto/" + this.props.id
        var productName = this.props.productName;
        if (productName.length > 22) {
            productName = this.props.productName.substring(0,22).concat('...');
        }
        
    
        return (
            <div className="col-lg-3 col-6">
                <div className="product">
                    <a href="#" className="img-prod"><img className="img-fluid customImage" src={image} alt="Colorlib Template" />
                        {status}
                        <div className="overlay"></div>
                    </a>
                    <div className="text py-3 pb-4 px-3 text-center">
                        <h3><Link to={url}>{productName}</Link></h3>
                        {tienda}
                        <div className="text-center">

                            <p>{pricing}</p>
                        </div>
                        <div className="bottom-area d-flex px-3">
                            <div className="m-auto d-flex">
                                {/*
                                <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                                    <span><i className="icon-shopping_basket"></i></span>
                                </a>
                                 <a href="#" className="heart d-flex justify-content-center align-items-center ">
                                    <span><i className="icon-heart"></i></span>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ProductCard;