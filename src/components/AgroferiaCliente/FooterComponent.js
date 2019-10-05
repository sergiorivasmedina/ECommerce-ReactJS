import React from 'react';

class FooterComponent extends React.Component {
  render() {
    return (
      <footer className="ftco-footer ftco-section bg-light">
        <div className="container">
          <div className="row">
            <div className="mouse">
              <a href="#" className="mouse-icon">
                <div className="mouse-wheel"><span className="ion-ios-arrow-up"></span></div>
              </a>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md">  
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Agroferias Campesinas</h2>
                <p>Fueron diseñadas para revalorar la agricultura familiar, sus productores y la biodiversidad del Perú. La feria empezó como proyecto en el 2012 y fue desarrollada por la Sociedad Peruana de Gastronomía – APEGA y financiado por el BID FOMIN.</p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li><a href="https://www.facebook.com/agroferiasperu/"><span className="icon-facebook"></span></a></li>
                  <li><a href="https://www.instagram.com/agroferiascampesinas/"><span className="icon-instagram"></span></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Menu</h2>
                <ul className="list-unstyled">
                  <li><a href="/Ferias" className="py-2 d-block">Ferias</a></li>
                  <li><a href="/Tiendas" className="py-2 d-block">Tiendas</a></li>
                  <li><a href="/Productos" className="py-2 d-block">Productos</a></li>
                  <li><a href="/Canasta" className="py-2 d-block">Canasta</a></li>
                  <li><a href="/Perfil" className="py-2 d-block">Perfil de Usuario</a></li>
                </ul>
              </div>
            </div>
            
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">¿Tiene preguntas?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><span className="icon icon-map-marker"></span><span className="text">Avenida Brasil cuadra 32, Lima, Peru</span></li>
                    <li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
                    <li><a href="#"><span className="icon icon-envelope"></span><span className="text">hola@agroferias.com</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </footer>

      
    );
  }

}

export default FooterComponent;