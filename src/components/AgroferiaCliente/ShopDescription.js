

import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class ShopDescription extends React.Component {
    
    constructor(props){
      super(props);
      this.routeChange = this.routeChange.bind(this);
    }

    async routeChange() {
      await sessionStorage.setItem("idTienda", this.props.index);
      console.log(sessionStorage.getItem("idTienda"));
      let path = "/detalleTienda";
      this.props.history.push(path);
    }

    render() {
      var shopdetail = this.props.shopdetail;
        if (shopdetail.length > 85) {
          shopdetail = this.props.shopdetail.substring(0,85).concat('...');
        }
    let status;

    
  

    return (

        <div className="col-md-6">
            <div className="product">
        <div className="row">
          <div className="col-md-5">
          <a><img className="img-fluid customImage" src={this.props.urlimage==null?"../images/noimage.png":this.props.urlimage}
                    alt="Colorlib Template"></img>
              {status}
              
            </a>
          </div>
          <div className="col-md-7 pt-3 pr-4">

          <h5 className="cardTitle">{this.props.shopname} {sessionStorage.getItem("idCliente")==null?
          <i className="width10"></i>:this.props.like==true? 
          <i className="ion-ios-heart width10 custom-heart" onClick={()=>this.props.handleClick(this.props.index)}></i> : 
          <i className="ion-ios-heart-empty width10 custom-heart" onClick={()=>this.props.handleClick(this.props.index)}></i>}</h5>
          
      
            <p className="pt-4">{shopdetail}</p>
            <a><button className="width100 pinkButton btn pt-1 pb-1 px-4" onClick={this.routeChange}>Ingresar a tienda</button></a>
          </div>
        </div>
        </div>
      </div>
        
    );
  }

}

export default withRouter(ShopDescription);