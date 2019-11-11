import React from 'react';
import Menu from '../../components/AgroferiaCliente/Menu';
import FooterComponent from '../../components/AgroferiaCliente/FooterComponent';
import HistoricItem from '../../components/AgroferiaCliente/HistoricItem';
import FairHeading from '../../components/Vegefoods/FairHeading';
import APIFerias from '../../services/FairsService';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';




class Basket extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pedidos: [],
            estados : {
                3: "Pendiente",
                4: "Registrado",
                5: "Por recoger",
                6: "Despachado",
                7: "No recogido",
                8: "Cancelado",
                9: "Rechazado",

              }
        }
    }    


    componentWillMount(){
    }

    componentDidMount() {
        APIFerias.get('https://fmh7fxbfoh.execute-api.us-east-2.amazonaws.com/Despliegue/api/pedidos/' + sessionStorage.getItem('idCliente'))
          .then(res=> {
            const pedidos = res.data;
            this.setState({ pedidos:pedidos })
          })
      }

    componentWillUpdate(){

    }

    

    render() {
        return (
            <div className="Stores">
                <Menu />
                <FairHeading title="Revisa tus pedidos pasados" imageUrl="../images/agroferia_tienda1.jpg"/>
                <section className="pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table">
                                    <thead className="thead-primary">
                                        <tr className="text-center">
                                            <th>N° Orden</th>
                                            <th>Estado de tu compra</th>
                                            <th>Fecha de compra</th>
                                            <th>Total</th>
                                            <th>Detalle de pedido</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.pedidos.map(pedido => <HistoricItem  id={pedido.idPedido} total={pedido.total} date={pedido.fecha.match(/(\d\d)(\d\d)(\d\d\d\d)/)} state={this.state.estados[pedido.estado]}/>)}
                                    
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>

                </section>

                <FooterComponent />
            </div>
        );
    }

}

export default Basket;
