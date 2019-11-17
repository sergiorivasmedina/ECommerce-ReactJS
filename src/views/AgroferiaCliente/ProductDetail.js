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
      quantity: 1,
      categoria: null,
      total: 0,
      idUsuario: null,
      store: ""
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
    var prod = {
      idPedido: "",
      idTipoMedioPago: 1,
      idCupon: 1,
      idCliente: parseInt(this.state.idUsuario),
      fecha: "2019-10-25",
      subtotal: this.state.total/ (1.18),
      igv: 0.18,
      total: this.state.total ,
      estado: -1,
      idProducto: parseInt(sessionStorage.getItem("idProducto")),
      cantidad: parseFloat(this.state.quantity),
      monto: this.state.total,
      idTienda: this.state.product.idTienda,
      idFeria: localStorage.getItem("idFeria")
    }
    console.log("ACA",prod)
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
    window.scrollTo(0, 0);
    if (sessionStorage.getItem("idCliente")) {
      this.state.idUsuario = sessionStorage.getItem("idCliente");

    }
    window.scrollTo(0, 0);
    

  }

  

  componentWillMount() {

    

    APIFerias.get('Despliegue/api/producto/' + sessionStorage.getItem("idProducto"))
      .then(res => {
        const product = res.data;

        this.setState({
          product: product,
          simbolo: product.unidadMedida.simbolo,
          categoria: product.subCategoria.categoria.idCategoria,
          quantity: 1,
          total: product.precio*this.state.quantity,
          precio: product.precio,
          precioFixed: product.precio.toFixed(2),
          discount: 0
        });

        console.log("PRODUCTO: ",this.state.product);
        
        console.log(this.state);
        APIFerias.get('Despliegue/api/tienda/perfil/' + this.state.product.idTienda)
        .then(res=> {
        const store = res.data;
        this.setState({ store:store.empresa.nombreComercial });

        
        
        });
      });
      

  }


  render() {
    let pricing;
    if (this.state.discount == "0") {

      pricing = <p className="price"><span>S/.{this.state.precioFixed} por {this.state.simbolo}</span></p>;
  }
  else {
      var discountPrice = (100 - parseFloat(this.state.discount)) * parseFloat(this.state.precio) / 100;
      discountPrice = discountPrice.toFixed(2).toString();
      pricing = <p className="price"><span className="customLineThrough mr-2 price-dc">S/.{this.state.precioFixed}</span><span className="price-sale pink">S/.{discountPrice} por {this.state.simbolo}</span></p>;
  }
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
                  <p>De: {this.state.store}</p>
                  <p>Descripción: {this.state.product.descripcion}</p>
                </div>

                <div className="col-md-4">
                  {pricing}
                  
                  <label>Cantidad: </label><input className="quantityInput" type="number" min="1"  value={this.state.quantity} onChange={this.updateQuantity}></input>
                  <p className="pt-2">Total: {this.state.total * (100-this.state.discount)/100} </p>
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
            </div>
            <SimilarProducts filter={this.state.categoria}></SimilarProducts>
      
          <div className="row pt-5">
            <h4>Opiniones de clientes</h4>
          </div>
        </div>
        <FooterComponent />
      </div >
    )
  }
}
