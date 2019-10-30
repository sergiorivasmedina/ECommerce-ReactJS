import React from 'react';
import ShopDescription from './ShopDescription';
import APIFerias from '../../services/FairsService';
import Swal from 'sweetalert2';

export default class StoreList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      favStore:[]
    };
    this.handleClick = this.handleClick.bind(this); 
  }

  componentDidMount() {
    console.log(this.props.fairId);
    console.log("Id cliente:",sessionStorage.getItem("idCliente"));
    APIFerias.get('/Despliegue/api/tiendas/feria/virtual/' + this.props.fairId)
      .then(res => {
        const stores = res.data;
        this.setState({ stores: stores})
        console.log(stores);
        APIFerias.get('/Despliegue/api/usuario/tiendasFavoritas/cliente/'+ sessionStorage.getItem("idCliente"))
          .then(res=>{
            const stores = res.data;
            this.setState({ favstore: stores})
            console.log("Tiendas favoritas:",stores);
        })
    });  
  }

  handleClick = s => {
    console.log("Selecciono:",s);
    const indexFav = this.state.favStore.findIndex((store) => {return parseInt(store.idTienda,10) == parseInt(s,10)});
    console.log("Es favorita?",indexFav);
    const index = this.state.stores.findIndex((store) => { return store.idTienda == s });
    const store = Object.assign({}, this.state.stores[index]);
    console.log("Tienda seleccionada:",store);
    
    /*
    if(heart){
      console.log("TIENDA SELECCIONADA:",store);
      var storeselect={
        idCliente:parseInt(sessionStorage.getItem("idCliente"),10),
        idTienda:store.idTienda
      }
      APIFerias.delete('/Despliegue/api/usuario/tiendasFavoritas/', storeselect)
      .then(response => {
        console.log("buena", response);
        Swal.fire({
            type: 'success',
            title: '¡Enhorabuena!',
            text: '¡Elimino una tienda favorita!',
        });
      }).catch(error => {
        console.log("error",error);
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: '¡No se pudo eliminar la tienda favorita!',
        })
      })
    }
    else{
      var storeselect = {
        idCliente:parseInt(sessionStorage.getItem("idCliente"),10),
        idTienda:store.idTienda,
        nombreTienda:store.empresa.nombreComercial
      };
      APIFerias.post('/Despliegue/api/usuario/tiendasFavoritas/agregar', storeselect)
      .then(response => {
        console.log("buena", response);
        Swal.fire({
            type: 'success',
            title: '¡Enhorabuena!',
            text: '¡Añadio una tienda favorita!',
        });
      }).catch(error => {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: '¡No se pudo añadir la tienda favorita!',
        })
      })
    }*/
    /*store.heart = !store.heart;
    const stores = Object.assign([], this.state.stores);
    stores[index] = store;
    this.setState({
      stores: stores
    });*/
  }

  render() {
    let filterStore = this.state.stores.filter(
      (store) =>{
        return store.empresa.nombreComercial.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1;
      }
    ).sort(function(a,b){
      if (a.heart > b.heart){
        return -1;
      }
      if(a.heart < b.heart){
        return 1;
      }
      return 0;
    });
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
        {filterStore.map(store => <ShopDescription index={store.idTienda} shopname={store.empresa.nombreComercial} shopdetail={store.descripcion}
          urlimage={store.foto} 
          like={
            this.state.favStore.map((element)=>{return element.idTienda === store.idTienda?true:false})
          } 
          handleClick={this.handleClick} />)}

      </div>
    )
  }

}

