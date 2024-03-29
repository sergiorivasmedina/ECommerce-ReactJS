import React from 'react';
import Navigator from '../../components/Vegefoods/Navigator';
import Product from '../../components/Vegefoods/Product';
import Footer from '../../components/Vegefoods/Footer';
import Subscribe from '../../components/Vegefoods/Subscribe';
import Heading from '../../components/Vegefoods/Heading';
import TemplateComponent from '../../components/AgroferiaCliente/TemplateComponent';
import FairComponent from '../../components/AgroferiaCliente/FairComponent';


class FairList extends React.Component {
    render() {
        return (
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
        </section>
        );
    }

}

export default FairList;
