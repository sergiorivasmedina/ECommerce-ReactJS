import React from 'react'
import ShopProfile from '../../components/AgroferiaCliente/ShopProfile'
import ProducerCard from '../../components/AgroferiaCliente/ProducerCard'
import ProductCard from '../../components/AgroferiaCliente/ProductCard'
import Menu from '../../components/AgroferiaCliente/Menu';
import ReturnButton from '../../components/AgroferiaCliente/ReturnButton';
import TestimonyCarousel from '../../components/Vegefoods/TestimonyCarousel';
import ProducerCarousel from '../../components/AgroferiaCliente/ProducerCarousel';
import APIFerias from '../../services/FairsService'
import {Link} from 'react-router-dom';
import FooterComponent from '../../components/AgroferiaCliente/FooterComponent';

export default class StoreDetail extends React.Component {
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

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentWillMount(){

    APIFerias.get('Despliegue/api/tienda/perfil/' + sessionStorage.getItem("idTienda"))
      .then(res=> {
        const profile = res.data;
        this.setState({ 
          name: profile.empresa.nombreComercial,
          description: profile.descripcion,
          phone: profile.empresa.celular,
          email: profile.empresa.email,
          photo: profile.foto
         })
         APIFerias.get('Despliegue/api/usuario/productor/empresa/' + profile.empresa.idEmpresa)
         .then(res=>{
           console.log(res.data);
           this.setState({producers:res.data})
         })
      })

      
      if (this.state.photo == null || this.state.photo == "") {
        this.setState({ 
            photo: "../images/tienda_1.jpg"
        })
      } 

      APIFerias.get('Despliegue/api/productos/tienda/' + sessionStorage.getItem("idTienda") + '/cliente')
      .then(res=> {
        const products = res.data;
        this.setState({ products:products })
      })

      
  }

 
  render() {
    return (
      <div>
        <Menu fairId={sessionStorage.getItem('idFeria')}/>
          <div className="container">
          <Link to={"/tiendas"}>
              <ReturnButton previousPage="Tiendas"></ReturnButton></Link>
              
                <ShopProfile
                shopName={this.state.name}
                shopDescription={this.state.description}
                imageUrl={this.state.photo}
                phoneNumber={this.state.phone}
                email={this.state.email}></ShopProfile>
                <h4>Conoce a nuestros productores</h4>
        
              
              <div className="row">
              {this.state.producers.map(producer =><ProducerCard key={producer.idProductor} producerName={producer.nombres + " " + producer.apellidoPaterno}
              producerDescription={"@"+ producer.username} imageUrl={producer.foto} producer={producer} coment={producer.observaciones}></ProducerCard> )}
              </div>
              <h4>Descubre nuestros productos</h4>
              <div className="row">
              {this.state.products.map(product => <ProductCard key={product.idProducto} id={product.idProducto} productName={product.nombre} price={product.precio} discount="0" store="" unit={product.unidadMedida.simbolo} imageUrl={product.imagen}/>)}
              </div>
            </div>
            <FooterComponent />
      </div >
    )
  }
}
