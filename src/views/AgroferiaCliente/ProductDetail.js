import React, { Component } from 'react'
import Menu from '../../components/AgroferiaCliente/Menu';
import ReturnButton from '../../components/AgroferiaCliente/ReturnButton';
import APIFerias from '../../services/FairsService';
import {Link} from 'react-router-dom';
import FooterComponent from '../../components/AgroferiaCliente/FooterComponent';
import ProductProfile from '../../components/AgroferiaCliente/ProductProfile';

export default class ProductDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      product: []
    }
  }

  componentWillMount(){
    const {id} = this.props.match.params;
  
    APIFerias.get('Despliegue/api/producto/' + id)
      .then(res=> {
        const product = res.data;
        this.setState({ 
          product: product
         });
         
      });
      console.log(this.state.product);
  }

 
  render() {
    return (
        <div>
        <Menu />
          <div className="container">
          <Link to="/productos"> 
              <ReturnButton previousPage="Productos"></ReturnButton></Link>
              
                
                <h4>Conoce a nuestros productores</h4>
        
              
              
              <h4>Descubre nuestros productos</h4>
              <div className="row">
              </div>
            </div>
            <FooterComponent />
      </div >
    )
  }
}
