import React from 'react';
import APIFerias from '../../services/FairsService';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

class HistoricItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    
    }

    componentDidMount() {

       
        
    }

   

    render() {
        return(
        <tr className="text-center">
    
            <Link to={"/detalleHistorial/" + this.props.id}><td className="id">{this.props.id}</td></Link>

            <td className="state">{this.props.state}</td>

            <td className="date">{this.props.date}</td>

            <td className="total">S/.{this.props.total}</td>
            <td> <Link to={"/detalleHistorial/" + this.props.id}><i className="detail" className="icon-eye pink"> </i> </Link> </td>
        </tr>
        );

    }


}


export default HistoricItem;