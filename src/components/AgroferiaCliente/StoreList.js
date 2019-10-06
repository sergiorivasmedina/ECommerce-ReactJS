import React from 'react';
import ShopDescription from './ShopDescription';

export default class StoreList extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            Stores:[{id:"0",name:"Papa y camote", detail:"vendemos...", image:"./images/tienda_1.jpg", like:false },
            {id:"1",name:"Aji y Limones", detail:"vendemos...", image:"./images/tienda_1.jpg" ,like:true},
            {id:"2",name:"Pachamama", detail:"vendemos...", image:"./images/tienda_1.jpg" ,like:false}]
        };
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick = s => {
      const index = this.state.Stores.findIndex((store)=> {return store.name==s.name});
      const store = Object.assign({},this.state.Stores[index]);
      store.like = !s.like;
      const stores = Object.assign([],this.state.Stores);
      stores[index]= store;
      this.setState({
        Stores:stores
      });
    }



    render(){
      let filterStore = this.state.Stores.filter(
        (store) =>{
          return store.name.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1;
        }
      );
        return(
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
              {filterStore.map((store,index) => <ShopDescription index={store} Shopname={store.name} Shopdetail={store.detail} 
              urlimage={store.image} like={store.like} handleClick={this.handleClick}/>)}
            </div>    
        )
    }

}

