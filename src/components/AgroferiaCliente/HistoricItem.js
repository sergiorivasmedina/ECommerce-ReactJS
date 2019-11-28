import React from 'react';
import APIFerias from '../../services/FairsService';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

class HistoricItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    
        this.routeChange = this.routeChange.bind(this);

    }

    async routeChange() {
        
        await sessionStorage.setItem("idPedidoHistorico", this.props.id);
        console.log(sessionStorage.getItem("idPedidoHistorico"));
        let path = "/detalleHistorial";
        this.props.history.push(path);
      }



    pad(num, size) {
        var s = num+"";
        while (s.length < size) s = "0" + s;
        return s;
    }

    componentDidMount() {

       
        
    }

   

    render() {
        let date = new Date(this.props.date);
        let dateFormat = moment(date).format('DD/MM/YYYY');
        return(
        <tr className="text-center">
    
        <a href="" onClick={this.routeChange}><td className="id">{this.pad(this.props.id,5)}</td></a>

            <td className="state">{this.props.state}</td>

            <td className="date">{dateFormat}</td>

            <td className="total">S/.{this.props.total}</td>
            <td> <a href="" onClick={this.routeChange}><i className="detail" className="icon-eye pink"> </i> </a> </td>
        </tr>
        );

    }


}

export default withRouter(HistoricItem);