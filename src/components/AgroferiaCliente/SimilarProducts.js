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
    APIFerias.get('Despliegue/api/productos/feria/' + localStorage.getItem('idFeria'))
      .then(res=> {
        const products = res.data;
        this.setState({ products:products });
        this.filter(this.props.filter);
        
      });
      
  }

  render() {
    return (
      <div>
        <div className="col-md-3 text-center d-flex align-self-stretch ">
          <div className="media block-6 services mb-md-0 mb-4">
            <div className="icon bg-color-4 active d-flex justify-content-center align-items-center mb-2">
              <span className={this.props.icon}></span>
            </div>
            <div className="media-body">
              <span>{this.props.description}</span>
            </div>
          </div>
        </div>
        <div className="row">
        {this.state.activeProducts.map(product => <ProductCard id={product.idProducto} productName={product.nombre} price={product.precio} discount="0"
          store={product.store} unit={product.unidadMedida.simbolo} imageUrl={product.imagen}/>)}
</div>
      </div>
    )
  }

}