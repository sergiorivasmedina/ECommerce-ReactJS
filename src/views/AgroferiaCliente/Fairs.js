import React from 'react';
import FairComponent from '../../components/AgroferiaCliente/FairComponent';
import FooterComponent from '../../components/AgroferiaCliente/FooterComponent';
import MenuFairComponent from '../../components/AgroferiaCliente/MenuFairsComponent';



class Fairs extends React.Component {
  render() {
    return (
      <div className="Fairs">
        <MenuFairComponent />

      
      <section className="ftco-section">

        <div className="container">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section text-center ">
              <span className="subheading">Nuestras Ferias</span>
              <h2 className="mb-4">Hola Casero</h2>
              <p>¿ En qué feria desea comprar?</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">

            <FairComponent name="Magdalena" imageUrl="images/product-1.jpg" />

            <FairComponent name="Callao" imageUrl="images/product-2.jpg" />

            <FairComponent name="Jesús María" imageUrl="images/product-3.jpg" />


              <FairComponent name="San Borja" imageUrl="images/product-4.jpg" /> 

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
