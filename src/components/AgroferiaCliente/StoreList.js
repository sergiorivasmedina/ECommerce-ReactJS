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
    /*this.handleClick = this.handleClick.bind(this); */
  }

  componentDidMount() {
    APIFerias.get('/Despliegue/api/tiendas/feria/virtual/' + this.props.fairId)
      .then(res => {
        var stores = res.data;
        this.setState({ stores: stores})
        console.log(stores);
        if(sessionStorage.getItem("idCliente")!=null){
          var favstores=[];
          APIFerias.get('/Despliegue/api/usuario/tiendasFavoritas/cliente/'+ sessionStorage.getItem("idCliente"))
            .then(res=>{
              favstores = res.data;
              console.log("Tiendas favoritas:",favstores);
              let list=[];
          for(var i=0;i<stores.length;i++){
            let item = stores[i];
            console.log("Esta en favoritos:",favstores.findIndex((element)=>{return element.idTienda==item.idTienda?true:false}))
            favstores.findIndex((element)=>{return element.idTienda==item.idTienda?item["heart"]=true:item["heart"]=false})
            /*if(favstores.map((element)=>{return element.idTienda==item.idTienda?true:false})){
              item["heart"] = true;
            }else{
              item["heart"] = false;
            }*/
            list.push(item);
          }
          console.log("lista nueva:", list);
          this.setState({stores:list});
          })
          
        }
    });  
  }

  handleClick = s => {
        
    console.log("Selecciono:",s);
    /*console.log("Tiendas favoritas:",this.props.favstores);
    const indexFav = this.props.favstores.findIndex((store) => {return parseInt(store.idTienda,10) == parseInt(s,10)});
    console.log("Es favorita?",indexFav);*/
    const index = this.state.stores.findIndex((store) => { return store.idTienda == s });
    const store = Object.assign({}, this.state.stores[index]);
    console.log("Tienda seleccionada:",store);
    if(store.heart){
      var storeselect={
        idCliente: parseInt(sessionStorage.getItem("idCliente"),10),
        idTienda: store.idTienda
      }
      console.log("Store Select", storeselect );
      APIFerias.delete('/Despliegue/api/usuario/tiendasFavoritas/eliminar', {data: storeselect})
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
    }
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
        <div className="row">
        {filterStore.map(store => <ShopDescription index={store.idTienda} shopname={store.empresa.nombreComercial} shopdetail={store.descripcion}
          urlimage={store.foto} 
          like={store.heart} 
          handleClick={this.handleClick} />)}
      </div>
      </div>
    )
  }

}

