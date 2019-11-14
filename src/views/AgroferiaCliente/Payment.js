import React from 'react';
import Menu from '../../components/AgroferiaCliente/Menu';
import FooterComponent from '../../components/AgroferiaCliente/FooterComponent';
import FormCard from '../../components/AgroferiaCliente/FormCard';
import 'react-credit-cards/es/styles-compiled.css';
import Swal from 'sweetalert2';
import APIFerias from '../../services/FairsService';
import $ from 'jquery';
import {Form,Button, ListGroup} from 'react-bootstrap';
import FairHeading from '../../components/Vegefoods/FairHeading';



class Payment extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            idPedido: null,
            status:false,
            usuario:{
            
          },
          activar:true,
          subtotal:0,
          igv:0,
          total:0,
          descuento:0,
          boleta:false,
          usarTarjetaExistente:false,/**Procesa culqi con la tarjeta guardad previamente */
          guardarTarjetaNueva:false,/**Guarda tarjeta, si existe una previa la chanca */
          tieneTarjeta:false,
          terminacionTarjeta:''/**terminacion de la tarjeta guardada previamente */
        };
    }

    componentWillMount(){
        console.log("location",window.location);
        const {idPedido} = this.props.match.params;
        this.setState({
            idPedido: idPedido,
            subtotal: localStorage.getItem('subtotal'),
            total: localStorage.getItem('total'),
            igv:localStorage.getItem('igv')
        })
        if(idPedido!=null){
                window.Payment = this;
                window.Culqi.publicKey = 'pk_test_dPmYFGxhKYaCH0Bm';
                window.Culqi.init();
                window.Culqi.settings({
                    title: 'Agroferia',
                    currency: 'PEN',
                    description: 'Canasta',
                    amount: localStorage.getItem('total')*100
                });
                window.Culqi.options({
                    lang: 'auto',
                    modal: true,
                    installments: true,
                    customButton: 'Pagar S/.' + localStorage.getItem('total'),
                    style: {
                      logo: 'https://culqi.com/LogoCulqi.png',
                      maincolor: '#0ec1c1',
                      buttontext: '#ffffff',
                      maintext: '#4A4A4A',
                      desctext: '#4A4A4A'
                    }
                });
                console.log(window.Culqi);
        }
        
        if(sessionStorage.getItem("idCliente")!=null){
            APIFerias.get('/Despliegue/api/usuario/cliente/'+ sessionStorage.getItem("idCliente"))
            .then(res=>{
                    const client = res.data;
                    this.setState({ usuario:client})
            })
        }
        /**Traer data de la tarjeta */
        
    }

    openCheckout=(e)=>{
        if(localStorage.getItem('total')>=3){
            window.Culqi.open();
            e.preventDefault();
        }else{
            Swal.fire({
                type: 'error',
                title: 'Lo sentimos',
                text: 'El monto minimo para pagar con tarjeta es S./ 3.00',
            });
        }
    }

    clickBoleta(){
        let v=this.state.boleta;
        this.setState({
            boleta:!v,
        })
    }

    emitirBoleta(){
        let someData = {
            close2u: {
                tipoIntegracion: "OFFLINE",
                tipoPlantilla: "01",
                tipoRegistro: "PRECIOS_CON_IGV"},
            datosDocumento: {
                fechaEmision: "2019-08-19",
                formaPago: "EFECTIVO",
                moneda: "PEN",
                numero: 1,
                serie: "BBV1" },
            detalleDocumento: [{
                cantidad: 3,
                codigoProducto: "PROD2",
                codigoProductoSunat: null,
                descripcion: "OPERCION RECARGA MES MAYO", "numeroOrden": 1,
                precioVentaUnitarioItem: 25,
                tipoAfectacion: "GRAVADO_OPERACION_ONEROSA",
                unidadMedida: "UNIDAD_SERVICIOS"} ],
            emisor: {
                correo: "facturacion@emisor.com.pe", 
                correoCopia: "",
                domicilioFiscal: {
                    departamento: "LIMA",
                    direccion: "DIRECCION DE EMISOR", "distrito": "MIRAFLORES",
                    pais: "PERU",
                    provincia: "LIMA",
                    ubigeo: "150133",
                    urbanizacion: ""},
                nombreComercial: "VENDEMAS",
                nombreLegal: "ARMIDA VICTORIA OCHOA TAMARIZ ",
                numeroDocumentoIdentidad: "55111222333",
                tipoDocumentoIdentidad: "RUC"},
            informacionAdicional: {
                tipoOperacion: "VENTA_INTERNA" },
            receptor: {
                correo: "johana27094@hotmail.com",
                domicilioFiscal: {
                    direccion: "DIRECCION DEL CLIENTE NRO 200",
                    pais: "PERU" },
                nombreComercial: "ARMIDA OCHOA",
                nombreLegal: "ARMIDA OCHOA", 
                numeroDocumentoIdentidad: "32404736",
                tipoDocumentoIdentidad:"DOC_NACIONAL_DE_IDENTIDAD"} 
            } 

        let username='empresa.emprendedora.1@close2u.pe';
        let password='55111222333.1';
        let headers_v = new Headers();
        headers_v.set('Authorization', 'Basic ' + Buffer.from(username +  ":" + password).toString('base64'));
        const putMethod = {
            method: 'PUT', // Method itself
            headers: headers_v,
            body: JSON.stringify(someData), // We send data in JSON format
            
           }
        fetch('https://dev.invoice2u.pe/apiemisor/invoice2u/integracion/boleta?key=qxE5+sLdubT8GXccl9Mmmw==', {putMethod})
           .then((response) => {
               response.json()})
           .then((data) => {console.log(data)}) // Manipulate the data retrieved back, if we want to do something with it
           .catch(err => {console.log(err)}) // Do something with the error
    }

    registroExitoso(){
        let montoI=this.state.total*100;
        let info={
            token:window.Culqi.token.id,
            monto:montoI.toString(),
            correo:this.state.usuario.correo,
            usarTarjetaExistente:this.state.usarTarjetaExistente,
            guardarTarjetaNueva:this.state.guardarTarjetaNueva
        }
        APIFerias.post('/Despliegue/api/pagos/registrarPago/' +  sessionStorage.getItem("idUsuario"), info)
        .then(res=>{
            console.log("Respuesta conexion culqi:",res.data);
        })
        APIFerias.put('/Despliegue/api/pedido/'+ this.state.idPedido +'/realizado')
        .then(res=>{
            Swal.fire({
                type: 'success',
                title: 'Tu pedido ha sido procesado correctamente',
                text: 'Gracias por tu compra',
            });
        })
        this.props.history.push("/resumen/" + this.state.idPedido);
        /*Emitir Boleta */
        if(this.state.boleta){
            this.emitirBoleta()
        }
    }

    registroFallido(){
        Swal.fire({
            type: 'error',
            title: 'Lo sentimos, su pedido no ha podido ser procesado',
            text: 'Le pedimos que lo intente nuevamente',
            onAfterClose: window.location='/canasta',
            timer: 1500
        });
    }

    selectCheckout(){
        let v=this.state.activar;
        this.setState({
            activar:!v,
        })
    }
     
    guardaTarjeta(){
        let v=this.state.guardarTarjetaNueva;
        this.setState({
            guardarTarjetaNueva:!v,
        })
    }

    usarTarjetaGuardada(){
        let v=this.state.usarTarjetaExistente;
        this.setState({
            usarTarjetaExistente:!v,
        })
    }

    render(){
        
        return(
        <div className="Stores">
            <Menu />
            <FairHeading title="Pago" imageUrl="../images/agroferia_tienda1.jpg" />
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
                                            <input type="text" className="form-control" placeholder={this.state.usuario.dni}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="firstname">Nombres</label>
                                            <input type="text" className="form-control" placeholder={this.state.usuario.nombres}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="firstname">Apellidos</label>
                                            <input type="text" className="form-control" placeholder={this.state.usuario.apellidoPaterno} />
                                        </div>
                                    </div>
                                <div className="w-100"></div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label for="towncity">Direccion</label>
                                <input type="text" className="form-control" placeholder=""/>
                                </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="postcodezip">Ciudad</label>
                                <input type="text" className="form-control" placeholder=""/>
                                </div>
                                </div>
                                <div className="w-100"></div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="phone">Telefono</label>
                                            <input type="text" className="form-control" placeholder={this.state.usuario.telefono}/>
                                        </div>
                                    </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="emailaddress">Correo electrónico</label>
                                    <input type="text" className="form-control" placeholder={this.state.usuario.correo}/>
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
                                                <span>S/.{localStorage.getItem('subtotal')}</span>
                                            </p>
                                            <p className="d-flex">
                                                <span>IGV</span>
                                                <span>S/.{this.state.igv}</span>
                                            </p>
                                            <p className="d-flex">
                                                <span>Despacho</span>
                                                <span>S/.{this.state.descuento}</span>
                                            </p>
                                            <p className="d-flex total-price">
                                                <span>Total</span>
                                                <span>S/.{localStorage.getItem('total')}</span>
                                            </p>
                                            </div>
                            </div>
                            <div className="col-md-12">
                                <div className="cart-detail p-3 p-md-4">
                                    <h3 className="billing-heading mb-4">Metodo de Pago</h3>
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <div className="radio">
                                                <Form.Check type="checkbox" aria-label="radio 1" label="Tarjeta Débito/Crédito" onClick={this.selectCheckout.bind(this)}/>
                                                <ListGroup>
                                                {!this.state.activar?
                                                <ListGroup.Item>
                                                    <Form.Check type="checkbox" aria-label="radio 1" label="Guardar Tarjeta" onClick={this.guardaTarjeta.bind(this)}/>
                                                </ListGroup.Item>
                                                :null}
                                                {(this.state.tieneTarjeta & !this.state.activar)?
                                                <ListGroup.Item>
                                                    <Form.Check type="checkbox" aria-label="radio 1" label="Tarjeta Bancaria" onClick={this.usarTarjetaGuardada.bind(this)}></Form.Check>
                                                    <p className="d-flex">
                                                    <span>  Terminación {this.state.terminacionTarjeta}</span>
                                                    </p>
                                                </ListGroup.Item>
                                                :null}
                                                </ListGroup>
                                                </div>
                                            </div>
                                        </div>
                                    <p>
                                    <Button disabled={this.state.activar} href="#"className="btn btn-primary py-3 px-4" onClick={this.openCheckout.bind(this)}>Hacer pedido</Button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </div>
                </div>
                {window.Culqi.token!=null?<div>El token existe</div>:null}
            </section>
        <FooterComponent/>
        </div>
        )
    }
}

export default Payment;