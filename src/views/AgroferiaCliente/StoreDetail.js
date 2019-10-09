import React, { Component } from 'react'
import ShopProfile from '../../components/AgroferiaCliente/ShopProfile'
import ProducerCard from '../../components/AgroferiaCliente/ProducerCard'
import ProductCard from '../../components/AgroferiaCliente/ProductCard'
import Menu from '../../components/AgroferiaCliente/Menu';
import ReturnButton from '../../components/AgroferiaCliente/ReturnButton';
import TestimonyCarousel from '../../components/Vegefoods/TestimonyCarousel';
import ProducerCarousel from '../../components/AgroferiaCliente/ProducerCarousel';
import APIFerias from '../../services/FairsService'
import {Link} from 'react-router-dom';

export default class StoreDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      description: "",
      phone: "",
      email: "",
      products: [],
      photo: "",
      producers:[]
    }
  }

  componentDidMount(){
    const {id} = this.props.match.params;
    console.log(id);

  
    APIFerias.get('Despliegue/api/tienda/perfil/' + id)
      .then(res=> {
        const profile = res.data;
        console.log(profile);
        this.setState({ 
          name: profile.empresa.nombreComercial,
          description: profile.descripcion,
          phone: profile.empresa.celular,
          email: profile.empresa.email,
          photo: profile.foto
         })
         APIFerias.get('Despliegue/api/usuario/productor/empresa/listar/' + profile.empresa.idEmpresa)
         .then(res=>{
           console.log(res.data);
           this.setState({producers:res.data})
         })
      })

      console.log(this.state.photo);
      if (this.state.photo == null || this.state.photo == "") {
        this.setState({ 
            photo: "../images/tienda_1.jpg"
        })
      } 

      APIFerias.get('Despliegue/api/productos/tienda/' + id)
      .then(res=> {
        const products = res.data;
        console.log(products);
        this.setState({ products:products })
        console.log(products);
      })

      
  }

 
  render() {
    return (
      <div>
        <Menu />
          <div className="container">
          <Link to={"/tiendas/" + localStorage.getItem('idFeria')}>
              <ReturnButton previousPage="Tiendas"></ReturnButton></Link>
              
                <ShopProfile
                shopName={this.state.name}
                shopDescription={this.state.description}
                imageUrl={this.state.photo}
                phoneNumber={this.state.phone}
                email={this.state.email}></ShopProfile>
                <h4>Conoce a nuestros productores</h4>
        
              
              <div className="row">
              {this.state.producers.map(producer =><ProducerCard producerName={producer.nombres + " " + producer.apellidoPaterno}
              producerDescription={"@"+ producer.username} imageUrl="../images/producer_logo.jpg" producer={producer} coment={producer.observaciones}></ProducerCard> )}
              </div>
              <h4>Descubre nuestros productos</h4>
              <div className="row">
              {this.state.products.map(product => <ProductCard productName={product.nombre} price={product.precio} discount="0" store="" imageUrl={product.solicitudProducto.imagen}/>)}
              </div>
            </div>
      </div >
    )
  }
}
