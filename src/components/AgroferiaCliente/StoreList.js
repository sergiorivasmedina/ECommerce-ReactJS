import React from 'react';
import ShopDescription from './ShopDescription';
import APIFerias from '../../services/FairsService';

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
    APIFerias.get('/Despliegue/api/tiendas/feria/virtual/' + this.props.fairId)
      .then(res => {
        const stores = res.data;
        this.setState({ stores: stores})
        console.log(stores);
        /*BORRAR DESPUES DE PRESENTACION DEL JUEVES */
        /**Se debe leer la lista tiendas favoritas del usuario y pintar el corazon*/
        let list=[];
        for(var i=0;i<stores.length;i++){
          let item = stores[i];
          item["heart"] = false;
          list.push(item);
        }
      });
  }
  
  
  handleClick = s => {
    console.log("Selecciono:",s);
    console.log(this.state.stores);
    /*MODIFICAR DESPUES DEL JUEVES */
    const index = this.state.stores.findIndex((store) => { return store.idTienda == s });
    const store = Object.assign({}, this.state.stores[index]);
    store.heart = !store.heart;
    const stores = Object.assign([], this.state.stores);
    stores[index] = store;
    this.setState({
      stores: stores
    });
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

