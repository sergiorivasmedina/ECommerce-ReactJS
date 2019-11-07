import React from 'react';
import { Link } from 'react-router-dom';

class FairComponent extends React.Component {

  componentDidMount() {
    console.log(this.props.idFeria);
    console.log("FairComponentJS", this.props.idFeria);


  }

  handleClick = (event, nombre) => {
    //localStorage.setItem('nombreFeria', this.props.name);
    console.log("nombre de la feria: ", nombre);
    console.log("hola carla cachis");
  }



  render() {
    let status;

    return (
      <div className="product fairCard col-md-6">

        <div className="row">
          <div className="col-md-5">
            <a className="img-prod"><img className="img-fluid customImage" src={this.props.imageUrl} alt="Colorlib Template" />
              {status}
              
            </a>
          </div>
          <div className="col-md-7 pt-3">

            <h5 className="cardTitle">{this.props.name}</h5>
            <p className="pt-4"><i className="customIcon icon-room"></i> <span>{this.props.address}</span></p>
            <Link to={"/tiendas/" + this.props.idFeria}><button className="width100 pinkButton btn pt-1 pb-1 px-4" onClick={this.addproduct}>Ingresar a feria</button></Link>
          </div>
        </div>
      </div>

    );
  }

}

export default FairComponent;