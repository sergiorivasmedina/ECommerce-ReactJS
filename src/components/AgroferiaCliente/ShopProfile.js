import React from 'react';

class ShopProfile extends React.Component {

    constructor(props){
        super(props);
        console.log(this.props.imageUrl);
        this.state = {
            photo: this.props.imageUrl
        }
    }


    render() {
        let status;

        return (
            <div className="row pt-5 pb-5">
                <div className="col-lg-3 col-md-4">
                    <img className="img-fluid" src={this.props.imageUrl}
                        alt="Colorlib Template"></img>
                </div>
                <div className="col-lg-9 col-md-8 text-left">
                    <h3>¡Bienvenido a {this.props.shopName}!</h3>
                    <p>{this.props.shopDescription}</p>
                    <div className="row">
                    <div className="col-11 text-left custom-inline">
                        <p>Contacto: &nbsp;<a href="">{this.props.phoneNumber}</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href="">{this.props.email}</a></p>
                    </div>
                    <div className="col-1 text-right custom-inline">
                        <a href=""><span className="icon-facebook-official custom-facebook"></span>&nbsp;&nbsp;</a>
                    </div>
                    
                    </div>
                </div>
            </div>

        );
    }

}

export default ShopProfile;