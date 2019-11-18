import React from 'react';
import APIFerias from '../../services/FairsService';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

class ProductBasket extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            quantity: this.props.cantidad,
            total: 0,
            precio:0
            
        }
        
    this.updateQuantity = this.updateQuantity.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    }

    componentWillMount() {

        APIFerias.get('Despliegue/api/productos/descuento/' + this.props.idProducto)
            .then(res => {
                this.setState({
                    nombreProducto: res.data.nombre,
                    imagenProducto: res.data.imagen,
                    total: this.props.monto.toFixed(2),
                    precio: (this.props.monto / this.props.cantidad).toFixed(2)

                });         
            })
        
        
    }

    async updateQuantity(evt) {
        await this.setState({
            total: evt.target.value * this.state.precio,
            quantity: evt.target.value,

        });
        var tot = this.state.total;

        await this.props.triggerParentUpdate(evt,this.props.idDetalle,this.state.quantity,this.state.total)
    }

    removeProduct(evt) {

    APIFerias.delete('Despliegue/api/pedido/' + sessionStorage.getItem('idCliente') + '/producto/' +this.props.idProducto)
      .then(res => {
          Swal.fire({
              type: 'success',
              title: '¡Cambio realizado!',
              text: '¡Elimino un producto',
              onAfterClose: window.location = '/canasta'
          });
      }).catch(error => {
          Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: '¡No se pudo eliminar el producto!',
          })
      })
    }

    render() {
        let pricing;
        pricing = <p className="price"><span>S/.{this.state.precio}</span></p>;
        
        var url = "detalleProducto/" + this.props.idProducto;
        return(
        <tr className="text-center">
            <td className="product-remove" onClick={this.removeProduct}><a href="#"><span className="ion-ios-close"></span></a></td>

            <td className="image-prod"><div className="" > <Link to={url}><img className="img-fluid basketImage" src={this.state.imagenProducto} alt="Colorlib Template" /></Link></div></td>

            <td className="product-name">
            <Link to={url}><h3>{this.state.nombreProducto}</h3></Link>
            </td>

            <td className=""><p>{pricing}</p></td>

            <td className="quantity">
                <div className="input-group mb-3">
                    <input type="number" min="1" name="quantity" className="quantity form-control input-number" value={this.state.quantity} onChange={this.updateQuantity}></input>
                </div>
            </td>

            <td className="total">S/.{this.state.total}</td>
        </tr>
        );

    }


}


export default ProductBasket;