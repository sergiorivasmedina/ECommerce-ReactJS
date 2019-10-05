import React from 'react';

class ShopDescription extends React.Component {
  render() {
    let status;

    return (
        <table className="table">
        <tbody>
            <tr className="text-center">

                <td className="width20 image-prod"><img className="img-fluid" src={this.props.imageUrl}
                    alt="Colorlib Template"></img></td>
                <td className="product-name">
                    <h3>{this.props.shopName}</h3>
                    <p>{this.props.shopDetail}</p>
                    <p><a href="">Ver productos</a> &nbsp;&nbsp; | &nbsp;&nbsp; <a href="">Conoce a tu casero</a></p>
                </td>
                <td className="icon-heart width20" onClick="activateHeart()">
                    
                </td>

            </tr>
        </tbody>
    </table>
    );
  }

}

export default ShopDescription;