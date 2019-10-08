import React from 'react';
import {Link} from 'react-router-dom';

class ShopDescription extends React.Component {
    

    render() {
    let status;
    
    return (
        <table className="table">
        <tbody>
            <tr className="text-center">
                <td className="width20 image-prod"><img className="img-fluid" src={this.props.urlimage}
                    alt="Colorlib Template"></img></td>
                <td className="product-name">
                    <Link to={"/detalleTienda/" + 2}>{this.props.Shopname}</Link>
                    <p>{this.props.Shopdetail}</p>
                    
                </td>
                {this.props.like==true ? <td className="ion-ios-heart width10" onClick={()=>this.props.handleClick(this.props.index)}></td> : <td className="ion-ios-heart-empty width10 custom-heart" onClick={()=>this.props.handleClick(this.props.index)}></td>}
            </tr>
        </tbody>
    </table>
    );
  }

}

export default ShopDescription;