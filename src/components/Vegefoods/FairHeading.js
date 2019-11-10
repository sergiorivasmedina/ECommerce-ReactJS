import React from 'react';
import {Link} from 'react-router-dom';
class FairHeading extends React.Component {
  render() {
    return (

      <div className="fairHeader hero-wrap hero-bread" style={{ backgroundImage: "url(" + this.props.imageUrl + ")" }}>
        <div className="container">
          <div className="row no-gutters slider-text align-items-left justify-content-left">
    
              <h4 className="fairTitle mb-0 pr-1 pl-1"><strong>{this.props.title}</strong></h4>
            
          </div>
        </div>
      </div>
    );
  }

}

export default FairHeading;



