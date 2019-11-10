

import React from 'react';
import {Link} from 'react-router-dom';

class ShopDescription extends React.Component {
    
    render() {
    let status;
    console.log("envia:" , this.props.like)
    var url = "/detalleTienda/" + this.props.index;
    return (

        <div className="col-md-6">
            <div className="product">
        <div className="row">
          <div className="col-md-5">
            <a className="img-prod"><img className="img-fluid customImage" src={this.props.urlimage==null?"../images/noimage.png":this.props.urlimage}
                    alt="Colorlib Template"></img>
              {status}
              
            </a>
          </div>
          <div className="col-md-7 pt-3 pr-4">

          <Link to={url}><h5 className="cardTitle">{this.props.shopname} {sessionStorage.getItem("idCliente")==null?
          <i className="width10"></i>:this.props.like==true? 
          <i className="ion-ios-heart width10 custom-heart" onClick={()=>this.props.handleClick(this.props.index)}></i> : 
          <i className="ion-ios-heart-empty width10 custom-heart" onClick={()=>this.props.handleClick(this.props.index)}></i>}</h5></Link> 
          
      
            <p className="pt-4">{this.props.shopdetail}</p>
            <Link to={"/detalleTienda/" + this.props.index}><button className="width100 pinkButton btn pt-1 pb-1 px-4" onClick={this.addproduct}>Ingresar a tienda</button></Link>
          </div>
        </div>
        </div>
      </div>
        
    );
  }

}

export default ShopDescription;