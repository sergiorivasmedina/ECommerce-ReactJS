import React from 'react';
import {Link} from 'react-router-dom';
class Heading extends React.Component {
  render() {
    return (

      <div className="hero-wrap hero-bread" style={{ backgroundImage: "url(" + this.props.imageUrl + ")" }}>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 text-center">
              <p className="breadcrumbs"><span className="mr-2"><Link to="/home">Home</Link></span> <span>{this.props.title}</span></p>
              <h1 className="mb-0 bread">{this.props.title}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Heading;



