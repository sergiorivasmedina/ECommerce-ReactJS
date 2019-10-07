import React, { Component } from 'react'
import ShopProfile from '../../components/AgroferiaCliente/ShopProfile'
import ProducerCard from '../../components/AgroferiaCliente/ProducerCard'
import ProductCard from '../../components/AgroferiaCliente/ProductCard'
import Menu from '../../components/AgroferiaCliente/Menu';
import ReturnButton from '../../components/AgroferiaCliente/ReturnButton';
import TestimonyCarousel from '../../components/Vegefoods/TestimonyCarousel';
import ProducerCarousel from '../../components/AgroferiaCliente/ProducerCarousel';


export default class StoreDetail extends Component {
  render() {
    return (
      <div>
        <Menu />
          <div className="container">
              <ReturnButton previousPage="Tiendas" reference="/Tiendas"></ReturnButton>
              
              <ShopProfile
                shopName="Papa y camote"
                shopDescription="La tienda es un tipo de establecimiento comercial en el cual la gente compra bienes o servicios a cambio del desembolso de una determinada cantidad de dinero, es decir, del valor monetario con el cual el producto o servicio ha sido asignado."
                imageUrl="./images/tienda_1.jpg"
                phoneNumber="999888777"
                email="papaycamote@gmail.com"></ShopProfile>
                <h4>Conoce a nuestros caseros</h4>
        
              
              <div className="row">
                
                <ProducerCard
                  producerName="Carla Cachis"
                  producerDescription="Vendedora"
                  imageUrl="./images/bg_1.jpg"></ProducerCard>

                <ProducerCard
                  producerName="Luis Arana"
                  producerDescription="Esclavo"
                  imageUrl="./images/bg_1.jpg"></ProducerCard>

                <ProducerCard
                  producerName="Sergio Rivas"
                  producerDescription="Productor"
                  imageUrl="./images/bg_1.jpg"></ProducerCard>

                <ProducerCard
                  producerName="Johana Gamboa"
                  producerDescription="Agricultora"
                  imageUrl="./images/bg_1.jpg"></ProducerCard>
              </div>
              <h4>Descubre nuestros productos</h4>
              <div className="row">
                <ProductCard productName="Mandarina" price="10" discount="0" imageUrl="./images/bg_1.jpg"></ProductCard>
                <ProductCard productName="Pera" price="10" discount="0" imageUrl="./images/bg_1.jpg"></ProductCard>
                <ProductCard productName="Fresa" price="10" discount="0" imageUrl="./images/bg_1.jpg"></ProductCard>
                <ProductCard productName="Uva" price="10" discount="0" imageUrl="./images/bg_1.jpg"></ProductCard>
              </div>
            </div>
      </div >
    )
  }
}
