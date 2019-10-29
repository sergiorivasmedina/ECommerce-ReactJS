import React from 'react';
import {Link} from 'react-router-dom';

class ShopDescription extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            photo: ""
        }
    }

    /*componentDidMount(){
        if (this.props.urlimage == null) {
            this.setState({ 
                photo: "../images/tienda_1.jpg"
            })
        } else {
            this.setState({ 
                photo: this.props.urlimage
            })
        }

        console.log("foto",this.state.photo);
    }*/

    render() {
    let status;
    console.log("envia:" , this.props.like)
    var url = "/detalleTienda/" + this.props.index;
    return (
        <table className="table">
        <tbody>
            <tr className="text-center">
                <td className="width20 image-prod"><img className="img-fluid customImage" src={this.props.urlimage}
                    alt="Colorlib Template"></img></td>
                <td className="product-name">
                    <Link to={url}>{this.props.shopname}</Link>
                    <p>{this.props.shopdetail}</p>
                    
                </td>
                {sessionStorage.getItem("idCliente")==null?<td className="width10"></td>:this.props.like==true? <td className="ion-ios-heart width10" onClick={()=>this.props.handleClick(this.props.index)}></td> : <td className="ion-ios-heart-empty width10 custom-heart" onClick={()=>this.props.handleClick(this.props.index)}></td>}
            </tr>
        </tbody>
    </table>
    );
  }

}

export default ShopDescription;