import React from 'react';
import Menu from '../../components/AgroferiaCliente/Menu';
import Heading from '../../components/Vegefoods/Heading';
import FooterComponent from '../../components/AgroferiaCliente/FooterComponent';


class Payment extends React.Component{
    render(){
        return(
        <div className="Stores">
            <Menu />
            <Heading title="Pago" imageUrl="../images/agroferia_tienda1.jpg" />
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-xl-7">
                        <form action="#" className="billing-form">
                            <h3 className="mb-4 billing-heading">Detalle de facturación</h3>
                                <div className="row align-items-end">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label for="lastname">Documento de Identidad</label>
                                            <input type="text" className="form-control" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="firstname">Nombres</label>
                                            <input type="text" className="form-control" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="firstname">Apellidos</label>
                                            <input type="text" className="form-control" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="w-100"></div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="streetaddress">Dirección</label>
                                                <input type="text" className="form-control" placeholder="Calle y número"/>
                                            </div>
                                        </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                <input type="text" className="form-control" placeholder="Apartamento, casa, unidad, etc (opcional)"/>
                                </div>
                                </div>
                                <div className="w-100"></div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label for="towncity">Ciudad</label>
                                <input type="text" className="form-control" placeholder=""/>
                                </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="postcodezip">Código postal</label>
                                <input type="text" className="form-control" placeholder=""/>
                                </div>
                                </div>
                                <div className="w-100"></div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label for="phone">Telefono</label>
                                <input type="text" className="form-control" placeholder=""/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="emailaddress">Correo electrónico</label>
                                <input type="text" className="form-control" placeholder=""/>
                                </div>
                            </div>
                            <div className="w-100"></div>
                            <div className="col-md-12"></div>
                            </div>
                        </form>
                                </div>
                                <div className="col-xl-5">
                        <div className="row mt-5 pt-3">
                            <div className="col-md-12 d-flex mb-5">
                                <div className="cart-detail cart-total p-3 p-md-4">
                                    <h3 className="billing-heading mb-4">Total de la canasta</h3>
                                    <p className="d-flex">
                                                <span>Subtotal</span>
                                                <span>S/.20.60</span>
                                            </p>
                                            <p className="d-flex">
                                                <span>Despacho</span>
                                                <span>S/.0.00</span>
                                            </p>
                                            <p className="d-flex">
                                                <span>Descuento</span>
                                                <span>S/.3.00</span>
                                            </p>
                                            <p className="d-flex total-price">
                                                <span>Total</span>
                                                <span>S/.17.60</span>
                                            </p>
                                            </div>
                            </div>
                            <div className="col-md-12">
                                <div className="cart-detail p-3 p-md-4">
                                    <h3 className="billing-heading mb-4">Metodo de Pago</h3>
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <div className="radio">
                                                    <label><input type="radio" name="optradio" className="mr-2"/>Culqi</label>
                                                </div>
                                            </div>
                                        </div>
                                    <p><a href="#"className="btn btn-primary py-3 px-4">Hacer pedido</a></p>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </div>
                </div>
            </section>
        <FooterComponent/>
        </div>
        )
    }
}

export default Payment;