import React from 'react';
import FairComponent from '../../components/AgroferiaCliente/FairComponent';
import FooterComponent from '../../components/AgroferiaCliente/FooterComponent';
import MenuFairComponent from '../../components/AgroferiaCliente/MenuFairsComponent';
import APIFerias from '../../services/FairsService'
import FairHeading from '../../components/Vegefoods/FairHeading';

class Fairs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fairs: [], //comentario,
      client:null,
      nombre:""
    }
  }

  componentDidMount(){
    
    APIFerias.get('/Despliegue/api/ferias')
      .then(res=> {
        const fairs = res.data;
        this.setState({ fairs:fairs })
        console.log(this.state.fairs);
      })

      if (sessionStorage.getItem("idUsuario")) {
        var idUSer = sessionStorage.getItem("idUsuario");
      

    APIFerias.get('/Despliegue/api/usuario/cliente/'+ idUSer)
  .then(res=> {
    const client = res.data;
    this.setState({ client:client, nombre:client.nombres })
    console.log(this.state.client);
  })}

  localStorage.setItem('activePage', 1);
  }

  render() {
    var urlIn = "/tiendas/" + localStorage.getItem("idFeria");
    return (
      <div className="Fairs">
        <MenuFairComponent />
        <FairHeading title="Te esperamos en nuestras ferias" imageUrl="../images/agroferia_tienda1.jpg"/>

      
      <section className="ftco-section">

    
        <div className="container">
          <div className="row">
            {this.state.fairs.map(fair => <FairComponent idFeria={fair.idFeria} name={fair.nombre} key={fair.idFeria} imageUrl={fair.logo} url={urlIn} address={fair.direccion}/>)}
{/* 
            <FairComponent name="Magdalena" imageUrl="images/product-1.jpg" />

            <FairComponent name="Callao" imageUrl="images/product-2.jpg" />

            <FairComponent name="Jesús María" imageUrl="images/product-3.jpg" />


              <FairComponent name="San Borja" imageUrl="images/product-4.jpg" />  */}

          </div>
        </div>
        <br></br>
        <FooterComponent />
      </section>
      </div>   
        );
  }

}

export default Fairs;
