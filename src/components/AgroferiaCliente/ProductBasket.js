import React from 'react';
import APIFerias from '../../services/FairsService';
import { Link } from 'react-router-dom';

class ProductBasket extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            quantity: this.props.cantidad,
            total: this.props.cantidad*this.props.monto,

            
        }
        
    this.updateQuantity = this.updateQuantity.bind(this);
    }

    componentDidMount() {

        APIFerias.get('Despliegue/api/producto/' + this.props.idProducto)
            .then(res => {
                this.setState({
                    nombreProducto: res.data.nombre,
                    imagenProducto: res.data.imagen
                });         
            })
        
        
    }

    async updateQuantity(evt) {
        await this.setState({
            quantity: evt.target.value,
            total: evt.target.value * this.props.monto
        });
        var tot = this.state.total;
        console.log("1:",this.props.idDetalle,this.state.quantity,this.state.total)

        await this.props.triggerParentUpdate(evt,this.props.idDetalle,this.state.quantity,this.state.total)
      }

      removeProduct(evt) {
          console.log("se removió producto")
      }

    render() {
        return(
        <tr className="text-center">
            <td className="product-remove" onClick={this.removeProduct}><a href="#"><span className="ion-ios-close"></span></a></td>

            <td className="image-prod"><div className="" > <img className="img-fluid basketImage" src={this.state.imagenProducto} alt="Colorlib Template" /></div></td>

            <td className="product-name">
                <h3>{this.state.nombreProducto}</h3>
            </td>

            <td className="price">S/.{this.props.monto}</td>

            <td className="quantity">
                <div className="input-group mb-3">
                    <input type="number" name="quantity" className="quantity form-control input-number" value={this.state.quantity} onChange={this.updateQuantity}></input>
                </div>
            </td>

            <td className="total">{this.state.total}</td>
        </tr>
        );

    }


}


export default ProductBasket;