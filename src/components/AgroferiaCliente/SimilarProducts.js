import React from 'react';
import ProductCard from '../../components/AgroferiaCliente/ProductCard';
import APIFerias from '../../services/FairsService';

export default class SimilarProducts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      activeProducts:[]
    };
    this.filter = this.filter.bind(this);
  }

  componentReceiveProps(props) {
    this.filter(props.filter);
  }

  filter(filterValue) {
    if (filterValue != "Todos") {
      var activeProducts = this.state.products.filter(function(p){
        return p.subCategoria.categoria.idCategoria === filterValue; 
      });
      this.setState({ activeProducts:activeProducts });
    } else {
      this.setState({ activeProducts: this.state.products });
    }   
  }

  componentDidMount() {
    APIFerias.get('Despliegue/api/productos/feria_promociones/' + localStorage.getItem('idFeria'))
      .then(res=> {
        const products = res.data;
        this.setState({ products:products });
        this.filter(this.props.filter);
        
      });
      
  }

  render() {
    return (
      <div>
        <div className="row">
        {this.state.activeProducts.map(product => <ProductCard id={product.idProducto} productName={product.nombre} price={product.precio} discount={product.porcDescuento*100}
          store={product.store} unit={product.unidadMedida.simbolo} imageUrl={product.imagen}/>)}
        </div>
      </div>
    )
  }

}