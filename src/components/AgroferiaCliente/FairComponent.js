import React from 'react';
import {Link} from 'react-router-dom';

class FairComponent extends React.Component {
  render() {
    let status;

    return (
      <div className="col-md-6 col-lg-3 ">
        
          <div className="product">
          <a href={this.props.url} className="img-prod"><img className="img-fluid" src={this.props.imageUrl} alt="Colorlib Template" />
            {status}
            <div className="overlay"></div>
          </a>
          <div className="text py-3 pb-4 px-3 text-center">
          
            <h3><Link to={"/tiendas/" + this.props.id}>{this.props.name}</Link></h3>
          </div>
        </div>
      </div>
      
    );
  }

}

export default FairComponent;