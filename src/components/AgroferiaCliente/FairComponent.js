import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class FairComponent extends React.Component {
  constructor(props){
    super(props);
    this.routeChange = this.routeChange.bind(this);
  }

  componentDidMount() {
    console.log(this.props.idFeria);
    console.log("FairComponentJS", this.props.idFeria);


  }

  handleClick = (event, nombre) => {
    //localStorage.setItem('nombreFeria', this.props.name);
  }

   

  async routeChange() {
    await sessionStorage.setItem("idFeria", this.props.idFeria);
    console.log("this.props.idFeria",this.props.idFeria);
    let path = "/tiendas";
    this.props.history.push(path);
  }

  render() {
    let status;
    let image;
    if (this.props.imageUrl == null || this.props.imageUrl == "") {
      image = "../images/AgroferiaCliente/logo_blanco.JPG";
    } else {
      image = this.props.imageUrl;
    }
    return (
      <div className="product fairCard col-md-6">

        <div className="row">
          <div className="col-md-5">
          <Link to={"/tiendas/" + this.props.idFeria}><img className="img-fluid customImage" src={image} alt="Colorlib Template" />
              {status}
              
            </Link>
          </div>
          <div className="col-md-7 pt-3">

            <h5 className="cardTitle">{this.props.name}</h5>
            <p className="pt-4"><i className="customIcon icon-room"></i> <span>{this.props.address}</span></p>
            <button className="width100 pinkButton btn pt-1 pb-1 px-4" onClick={this.routeChange}>Ingresar a feria</button>
          </div>
        </div>
      </div>

    );
  }

}

export default withRouter(FairComponent);