import React, { Component } from 'react'
import Menu from '../../components/AgroferiaCliente/Menu';
import ReturnButton from '../../components/AgroferiaCliente/ReturnButton';
import APIFerias from '../../services/FairsService';
import { Link } from 'react-router-dom';
import FooterComponent from '../../components/AgroferiaCliente/FooterComponent';
import ProductProfile from '../../components/AgroferiaCliente/ProductProfile';
import SimilarProducts from '../../components/AgroferiaCliente/SimilarProducts';
import Swal from 'sweetalert2';

export default class ProductDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: [],
      simbolo: null,
      quantity: 0,
      categoria: null,
      total: 0,
      idUsuario: null
    }
    this.updateQuantity = this.updateQuantity.bind(this);
    this.addproduct = this.addproduct.bind(this);

  }



  updateQuantity(evt) {
    this.setState({
      quantity: evt.target.value,
      total: evt.target.value * this.state.product.precio
    });
    console.log(this.state.quantity);
  }

  addproduct = (event) => {
    const { id } = this.props.match.params;
    var prod = {
      idPedido: "",
      idTipoMedioPago: 1,
      idCupon: 1,
      idCliente: parseInt(this.state.idUsuario),
      fecha: "2019-10-25",
      subtotal: this.state.total,
      igv: 0.18,
      total: this.state.total / (1.18),
      estado: -1,
      idProducto: parseInt(id),
      cantidad: parseFloat(this.state.quantity),
      monto: parseFloat(this.state.product.precio),
      idTienda: this.state.product.idTienda
    }
    console.log(prod)
    APIFerias.post('/Despliegue/api/pedido/producto', prod)
      .then(response => {
        console.log("Producto añadido")

        Swal.fire({
          title: 'Producto añadido a la canasta',
          type:'success'}
        )

        return response;

      })

  }

  componentDidMount() {

    if (sessionStorage.getItem("idCliente")) {
      this.state.idUsuario = sessionStorage.getItem("idCliente");

    }


  }


  componentWillMount() {
    const { id } = this.props.match.params;


    APIFerias.get('Despliegue/api/producto/' + id)
      .then(res => {
        const product = res.data;
        this.setState({
          product: product,
          simbolo: product.unidadMedida.simbolo,
          categoria: product.subCategoria.categoria.idCategoria
        });
      });

  }


  render() {
    return (
      <div>
        <Menu />
        <div className="container">
          <Link to="/productos">
            <ReturnButton previousPage="Productos"></ReturnButton></Link>
          <div className="row pt-5">
            <div className="col-md-4">
              <img className="img-fluid customImage" src={this.state.product.imagen}></img>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <h4>{this.state.product.nombre}</h4>
                </div>
                <div className="col-md-8">
                  <p>De: Tienda</p>
                  <p>Descripción: {this.state.product.descripcion}</p>
                </div>

                <div className="col-md-4">
                  <p>S/. {this.state.product.precio} por {this.state.simbolo}</p>
                  <label>Cantidad: </label><input className="quantityInput" value={this.state.quantity} onChange={this.updateQuantity}></input>
                  <p className="pt-2">Total: {this.state.total} </p>
                </div>
                <div className="col-md-12">
                  <Link to="/canasta">
                 
                    <button className="pinkButton btn pt-2 pb-2 px-4 mr-2" onClick={this.addproduct}>Comprar ya</button></Link>
                  <button className="pinkButton btn pt-2 pb-2 px-4" onClick={this.addproduct}>Añadir a la canasta</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <h4>Productos relacionados</h4>
            <SimilarProducts filter={this.state.categoria}></SimilarProducts>
          </div>
          <div className="row pt-5">
            <h4>Opiniones de clientes</h4>
          </div>
        </div>
        <FooterComponent />
      </div >
    )
  }
}
