import React from 'react';
import APIFerias from '../../services/FairsService';
import Swal from 'sweetalert2';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import { MdSentimentSatisfied, MdSentimentDissatisfied } from "react-icons/md";



class ProductHistoricRate extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            quantity: this.props.cantidad,
            total: this.props.cantidad*this.props.monto,
            rating: 0

            
        }
        
    this.updateQuantity = this.updateQuantity.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.changeRating = this.changeRating.bind(this);
    this.rate = this.rate.bind(this);
    this.complain = this.complain.bind(this);
    }

    rate(){
        Swal.fire({
            title: 'Por favor, valora el producto',
            html: '<StarRatings rating={this.state.rating} starRatedColor="blue" changeRating={this.changeRating} numberOfStars={5} starDimension="25px" starSpacing="3px" name="rating" />'
        })
    }

    complain(){
        const { value: queja } = Swal.fire({
            title: '¿Qué salió mal?',
            input: 'text',
            showCancelButton: true,
            inputValidator: (value) => {
              if (!value) {
                return 'You need to write something!'
              }
            },
            inputPlaceholder: 'Ingrese su reclamo'
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    title: 'Reclamo enviado',
                    type: 'success'
                }
                )
                console.log(result.value)

                
            }


        })

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
            total: this.props.monto
        });
        var tot = this.state.total;
        console.log("1:",this.props.idDetalle,this.state.quantity,this.state.total)

        await this.props.triggerParentUpdate(evt,this.props.idDetalle,this.state.quantity,this.state.total)
    }

    removeProduct(evt) {

    APIFerias.delete('Despliegue/api/pedido/' + sessionStorage.getItem('idCliente') + '/producto/' +this.props.idProducto)
      .then(res => {
          Swal.fire({
              type: 'success',
              title: '¡Enhorabuena!',
              text: '¡Elimino un producto',
              onAfterClose: window.location = '/canasta'
          });
      }).catch(error => {
          Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: '¡No se pudo eliminar!',
          })
      })
    }

    changeRating( newRating, name ) {
        this.setState({
          rating: newRating
        });
      }

    render() {
        return(
        <tr className="text-center">

            <td className="image-prod"><div className="" > <img className="img-fluid basketImage" src={this.state.imagenProducto} alt="Colorlib Template" /></div></td>

            <td className="product-name">
                <h3>{this.state.nombreProducto}</h3>
            </td>

            <td className="price">S/.{(this.props.monto / this.state.quantity)}</td>
            <td className="price">{this.state.quantity}</td>

            

            <td className="total">S/.{this.props.monto}</td>
            <td className="total">{this.props.estadoDetalle}</td>
            {/* <td> <Link onClick ={this.rate} > <MdSentimentSatisfied color= "deeppink" size="50" /> </Link>
             <Link onClick ={this.complain} > <MdSentimentDissatisfied color= "deeppink" size="50" /> </Link> </td> */}

            <td className="stars"> <StarRatings rating={this.state.rating} starRatedColor="blue" 
                changeRating={this.changeRating} numberOfStars={5} starDimension="25px"
                starSpacing="3px" name='rating' />  </td>
        </tr>
        );

    }


}


export default ProductHistoricRate;