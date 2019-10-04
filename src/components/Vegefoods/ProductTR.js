import React from 'react';

class ProductTR extends React.Component {
    render() {
        return (


            <tr className="text-center">
                <td className="product-remove"><a href="#"><span className="ion-ios-close"></span></a></td>

                <td className="image-prod"><div className="img" style={{ backgroundImage: "url(" + this.props.imageUrl + ")" }}></div></td>

                <td className="product-name">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.description}</p>
                </td>

                <td className="price">${this.props.price}</td>

                <td className="quantity">
                    <div className="input-group mb-3">
                        <input type="text" name="quantity" className="quantity form-control input-number" min="1" max="100" />
                    </div>
                </td>

                <td className="total">${this.props.price}</td>
            </tr>

        );
    }

}

export default ProductTR;
