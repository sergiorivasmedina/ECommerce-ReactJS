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
    APIFerias.get('/Despliegue/api/tiendas/feria/' + this.props.fairId)
      .then(res => {
        const stores = res.data;
        this.setState({ stores: stores })
        console.log(stores);
      });
  }

  handleClick = s => {
    const index = this.state.Stores.findIndex((store) => { return store.name == s.name });
    const store = Object.assign({}, this.state.Stores[index]);
    store.like = !s.like;
    const stores = Object.assign([], this.state.Stores);
    stores[index] = store;
    this.setState({
      stores: stores
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
        {this.state.stores.map(store => <ShopDescription index={store.idTienda} shopname={store.empresa.nombreComercial} shopdetail={store.descripcion}
          urlimage={store.foto} like="false" handleClick={this.handleClick} />)}

      </div>
    )
  }

}

