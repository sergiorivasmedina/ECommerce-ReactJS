import React from 'react';
import { Link } from 'react-router-dom';
import APIFerias from '../../services/FairsService';
import { withRouter } from 'react-router-dom';
class ProductCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            photo: null,
            store: ""
        }
        this.routeChange = this.routeChange.bind(this);
    }
    componentDidMount() {

        
    }



      async routeChange() {
        
        await sessionStorage.setItem("idProducto", this.props.id);
        console.log(sessionStorage.getItem("idProducto"));
        let path = "/detalleProducto";
        this.props.history.push(path);
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

            pricing = <span className="price">S/.{this.props.price} x {this.props.unit}</span>;
        }
        else {
            var discountPrice = (100 - parseFloat(this.props.discount)) * parseFloat(this.props.price) / 100;
            discountPrice = discountPrice.toString();
            status = <span className="status">{this.props.discount}%</span>;
            pricing = <span className="price"><span className="customLineThrough mr-2 price-dc">S/.{this.props.price}</span><span className="price-sale pink">S/.{discountPrice} x {this.props.unit}</span></span>;
        }

        APIFerias.get('/Despliegue/api/tienda/perfil/' + this.props.store)
            .then(res => {
                const store = res.data;
                this.setState({ store: store.empresa.nombreComercial });
            });
        if (this.state.store != "") {
            var tienda = <div className="text-center">

                <p>Tienda: {this.state.store}</p>
            </div>;
        }

        var url = "detalleProducto/" + this.props.id;
        var productName = this.props.productName;
        if (productName.length > 22) {
            productName = this.props.productName.substring(0,22).concat('...');
        }
        
    
        return (
            <div className="col-lg-3 col-6">
                <div className="product">
                <a href="" className="img-prod" onClick={this.routeChange}><img className="img-fluid customImage" src={image} alt="Colorlib Template" /> {status} <div className="overlay"></div>
                        
                       
                    </a>

                
                    <div className="text py-3 pb-4 px-3 text-center">
                    <a href="" onClick={this.routeChange}><h3>{productName}</h3></a>
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
export default withRouter(ProductCard);