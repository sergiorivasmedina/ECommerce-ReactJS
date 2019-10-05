import React, { Component } from 'react'
import ShopProfile from './ShopProfile'
import ProducerCard from './ProducerCard'
import TestimonyCarousel from '../Vegefoods/TestimonyCarousel'
import Product from '../Vegefoods/Product'

export default class TemplateComponent extends Component {
    render() {
        return (
          <div>
          <ShopProfile 
          shopName="Papa y camote" 
          shopDescription="La tienda es un tipo de establecimiento comercial en el cual la gente compra bienes o servicios a cambio del desembolso de una determinada cantidad de dinero, es decir, del valor monetario con el cual el producto o servicio ha sido asignado." 
          imageUrl="./images/bg_1.jpg"
          phoneNumber="999888777"
          email="papaycamote@gmail.com"></ShopProfile>
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

          </div>
        )
    }
}
