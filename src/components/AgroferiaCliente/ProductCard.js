import React from 'react';

class ProductCard extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            photo: null
        }
    }

    componentDidMount(){
        if (this.props.imageUrl == null || this.props.imageUrl == "") {
            this.setState({ 
                photo: "../images/bg_1.jpg"
            })
            console.log(this.state);
        } else {
            this.setState({ 
                photo: this.props.imageUrl
            })
        }
        
    }

    render() {
        let status;
        let pricing;

        if (this.props.discount == "0") {

            pricing = <p className="price"><span>S/.{this.props.price}</span></p>;
        }
        else {
            var discountPrice = (100 - parseFloat(this.props.discount)) * parseFloat(this.props.price) / 100;
            discountPrice = discountPrice.toString();
            status = <span className="status">{this.props.discount}%</span>;
            pricing = <p className="price"><span className="mr-2 price-dc">S/.{this.props.price}</span><span className="price-sale">S/.{discountPrice}</span></p>;
        }

        if (this.props.store != "") {
            var tienda = <div className="text-center">
          
                    <p>Tienda: {this.props.store}</p>
            </div>;
        }


        return (
            <div className="col-lg-3 col-6">
                <div className="product">
                    <a href="#" className="img-prod"><img className="img-fluid customImage" src={this.state.photo} alt="Colorlib Template" />
                        {status}
                        <div className="overlay"></div>
                    </a>
                    <div className="text py-3 pb-4 px-3 text-center">
                        <h3><a href="#">{this.props.productName}</a></h3>
                        {tienda}
                        <div className="d-flex">
                            <div className="pricing">
                                {pricing}
                            </div>
                        </div>
                        <div className="bottom-area d-flex px-3">
                            <div className="m-auto d-flex">

                                <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                                    <span><i className="icon-shopping_basket"></i></span>
                                </a>
                                <a href="#" className="heart d-flex justify-content-center align-items-center ">
                                    <span><i className="icon-heart"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ProductCard;