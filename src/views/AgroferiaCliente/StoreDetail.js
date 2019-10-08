import React, { Component } from 'react'
import ShopProfile from '../../components/AgroferiaCliente/ShopProfile'
import ProducerCard from '../../components/AgroferiaCliente/ProducerCard'
import ProductCard from '../../components/AgroferiaCliente/ProductCard'
import Menu from '../../components/AgroferiaCliente/Menu';
import ReturnButton from '../../components/AgroferiaCliente/ReturnButton';
import TestimonyCarousel from '../../components/Vegefoods/TestimonyCarousel';
import ProducerCarousel from '../../components/AgroferiaCliente/ProducerCarousel';
import APIFerias from '../../services/FairsService'

export default class StoreDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      description: "",
      phone: "",
      email: "",
      products: [],
      photo: ""
    }
  }

  componentDidMount(){
    const {id} = this.props.match.params;
    console.log(id);

  
    APIFerias.get('Despliegue/api/tienda/perfil/' + id)
      .then(res=> {
        const profile = res.data;
        this.setState({ 
          name: profile.empresa.nombreComercial,
          description: profile.descripcion,
          phone: profile.empresa.celular,
          email: profile.empresa.email,
          photo: profile.foto
         })
      })

      console.log(this.state.photo);
      if (this.state.photo == null || this.state.photo == "") {
        this.setState({ 
            photo: "../images/bg_1.jpg"
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
              <ReturnButton previousPage="Tiendas" reference="/Tiendas"></ReturnButton>
              
                <ShopProfile
                shopName={this.state.name}
                shopDescription={this.state.description}
                imageUrl={this.state.photo}
                phoneNumber={this.state.phone}
                email={this.state.email}></ShopProfile>
                <h4>Conoce a nuestros productores</h4>
        
              
              <div className="row">
                
                <ProducerCard
                  producerName="Carla Cachis"
                  producerDescription="Vendedora"
                  imageUrl="../images/producer_1.jpg"></ProducerCard>

                <ProducerCard
                  producerName="Luis Arana"
                  producerDescription="Vendedor"
                  imageUrl="../images/producer_2.jpg"></ProducerCard>

                <ProducerCard
                  producerName="Sergio Rivas"
                  producerDescription="Productor"
                  imageUrl="../images/producer_3.jpg"></ProducerCard>

                <ProducerCard
                  producerName="Johana Gamboa"
                  producerDescription="Agricultora"
                  imageUrl="../images/producer_4.jpg"></ProducerCard>
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
