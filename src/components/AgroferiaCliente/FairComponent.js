import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import APIFerias from '../../services/FairsService'

class FairComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      numProductosCanasta: 0
    }
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
    var idFeria = sessionStorage.getItem("idFeria");
    await sessionStorage.setItem("idFeria", this.props.idFeria);
    console.log("this.props.idFeria",this.props.idFeria);

    APIFerias.get('Despliegue/api/pedido/' + sessionStorage.getItem("idCliente"))
      .then(res => {
        //traer el detallePedido del idPedido, el cual es el actual
        APIFerias.get('Despliegue/api/pedido/' + res.data.idPedido + '/detalle')
            .then(response => {
              this.setState.numProductosCanasta = response.data.length;
              console.log("LONGITUD CANASTA: ", this.setState.numProductosCanasta);

              if(idFeria != this.props.idFeria && this.setState.numProductosCanasta > 0){
                console.log("DIFERENTE FERIA");
          
                APIFerias.delete('Despliegue/api/pedido/cliente/' + sessionStorage.getItem("idCliente")).then(res =>{
                  console.log("SE ELIMINA LA CANASTA ACTUAL");
                })
          
                Swal.fire({
                  type: 'success',
                  title: '¡Ha cambiado de feria!',
                  text: '¡Se ha vaciado su canasta',
              });
              }
                
            })

            
      })


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