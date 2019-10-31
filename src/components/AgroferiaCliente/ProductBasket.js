import React from 'react';
import { Link } from 'react-router-dom';

class ProductBasket extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            quantity: null,
            total: 0
        }
        
    this.updateQuantity = this.updateQuantity.bind(this);
    }

    componentDidMount() {
        
    }

    updateQuantity(evt) {
        this.setState({
          quantity: evt.target.value,
          total: evt.target.value * this.props.product.precio
        });
        console.log(this.state.quantity);
      }

    render() {
        return(
        <tr className="text-center">
            <td className="product-remove"><a href="#"><span className="ion-ios-close"></span></a></td>

            {/* <td className="image-prod"><div className="" > <img className="img-fluid basketImage" src={this.props.product.imagen} alt="Colorlib Template" /></div></td> */}

            <td className="product-name">
                <h3>{this.props.product.idProducto}</h3>
            </td>

            <td className="price">S/.{this.props.monto}</td>

            <td className="quantity">
                <div className="input-group mb-3">
                    <input type="text" name="quantity" className="quantity form-control input-number" value={this.state.quantity} onChange={this.updateQuantity}></input>
                </div>
            </td>

            <td className="total">{this.state.total}</td>
        </tr>
        );

    }


}


export default ProductBasket;