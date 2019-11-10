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
    
            <td className="id">{this.props.id}</td>

            <td className="state">{this.props.state}</td>

            <td className="date">{this.props.date}</td>

            <td className="total">S/.{this.props.total}</td>
            <td> <i className="detail" className="icon-eye pink"> </i> </td>
        </tr>
        );

    }


}


export default HistoricItem;