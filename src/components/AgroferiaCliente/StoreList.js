import React from 'react';
import ShopDescription from './ShopDescription';
import APIFerias from '../../services/FairsService';
import Swal from 'sweetalert2';

export default class StoreList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stores: []
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
        if(sessionStorage.getItem("idCliente")!=null){
          APIFerias.get('/Despliegue/api/usuario/tiendasFavoritas/cliente/'+ sessionStorage.getItem("idCliente"))
          .then(res=>{
            const favStores = res.data;
            console.log("Tiendas favoritas:",favStores);
            let list=[];
            for(var i=0;i<stores.length;i++){
              let item = stores[i];
              console.log("Es favorita?:",favStores.map((element)=>{return element.idTienda === item.idTienda}));
              favStores.map((element)=>{
                return element.idTienda === item.idTienda?item["heart"]=true:item["heart"]=false})
              list.push(item);
            }
            console.log("lista nueva:",list);
            this.setState({ stores: list})
          })
        }
      });
  }
  
  
  handleClick = s => {
    console.log("Selecciono:",s);
    /*MODIFICAR DESPUES DEL JUEVES */
    const index = this.state.stores.findIndex((store) => { return store.idTienda == s });
    const store = Object.assign({}, this.state.stores[index]);
    
    if(store.heart==true)/**Eliminación logica */{
      console.log("TIENDA SELECCIONADA:",store);
      var storeselect={
        idCliente:sessionStorage.getItem("idCliente"),
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
    else{/**Agregar tienda favorita */
      var storeselect = {
        idCliente:sessionStorage.getItem("idCliente"),
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
    }
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
          urlimage={store.foto} like={store.heart} handleClick={this.handleClick} />)}

      </div>
    )
  }

}

