import React from 'react';
import ProductCard from '../../components/AgroferiaCliente/ProductCard';

export default class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  

  componentDidMount() {
      this.setState({products: [
        {
        idProducto: 1,
        subCategoria: {
        idSubcategoria: 1,
        categoria: {
        idCategoria: 1,
        nombre: "Lácteos",
        descripcion: null,
        activo: 1
        },
        nombre: "Leche",
        descripcion: null,
        activo: 1
        },
        unidadMedida: {
        idUnidadMedida: 1,
        nombre: "Litros",
        simbolo: "LT",
        activo: 1
        },
        solicitudProducto: {
        idSolicitudProducto: 1,
        subCategoria: {
        idSubcategoria: 1,
        categoria: {
        idCategoria: 1,
        nombre: "Lácteos",
        descripcion: null,
        activo: 1
        },
        nombre: "Leche",
        descripcion: null,
        activo: 1
        },
        unidadMedida: {
        idUnidadMedida: 1,
        nombre: "Litros",
        simbolo: "LT",
        activo: 1
        },
        idSolicitudTienda: 1,
        idSolicitudEmpresa: 1,
        idTienda: 1,
        nombre: "Leche de Soya",
        precio: 8.61,
        imagen: null,
        descripcion: "Leche de pura soya",
        valorNutricional: "15 de hierro",
        razon: "Embasado",
        idUsuarioRegistro: null,
        idUsuarioRespuesta: null,
        estado: null,
        fechaRegistro: null,
        fechaRespuesta: null,
        activo: 1
        },
        idTienda: 1,
        nombre: "Leche de Soya",
        codProducto: "AAABBB",
        precio: 8.99,
        stock: 78,
        descripcion: "Leche de Soya",
        valorNutricional: "17 Calorias",
        activo: 1
        },
        {
            idProducto: 2,
            subCategoria: {
            idSubcategoria: 1,
            categoria: {
            idCategoria: 1,
            nombre: "Tubérculos",
            descripcion: null,
            activo: 1
            },
            nombre: "Tubérculos",
            descripcion: null,
            activo: 1
            },
            unidadMedida: {
            idUnidadMedida: 1,
            nombre: "Litros",
            simbolo: "LT",
            activo: 1
            },
            solicitudProducto: {
            idSolicitudProducto: 1,
            subCategoria: {
            idSubcategoria: 1,
            categoria: {
            idCategoria: 1,
            nombre: "Tubérculos",
            descripcion: null,
            activo: 1
            },
            nombre: "Leche",
            descripcion: null,
            activo: 1
            },
            unidadMedida: {
            idUnidadMedida: 1,
            nombre: "Litros",
            simbolo: "LT",
            activo: 1
            },
            idSolicitudTienda: 1,
            idSolicitudEmpresa: 1,
            idTienda: 1,
            nombre: "Leche de Soya",
            precio: 8.61,
            imagen: null,
            descripcion: "Leche de pura soya",
            valorNutricional: "15 de hierro",
            razon: "Embasado",
            idUsuarioRegistro: null,
            idUsuarioRespuesta: null,
            estado: null,
            fechaRegistro: null,
            fechaRespuesta: null,
            activo: 1
            },
            idTienda: 1,
            nombre: "Papas",
            codProducto: "AAABBB",
            precio: 8.99,
            stock: 78,
            descripcion: "Papas",
            valorNutricional: "17 Calorias",
            activo: 1
            }
            
        ]},
        
        );
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
        {this.state.products.map(product => <ProductCard productName={product.nombre} price={product.precio} discount="0"
          store={product.store} unit={product.unidadMedida.simbolo}/>)}
</div>
      </div>
    )
  }

}

