import React from 'react';
import {Link} from 'react-router-dom';

class ReturnButton extends React.Component {
    render() {
        let status;

        return (
            <div className="pl-0 col-md-6 col-lg-3 pt-2">
               
                   <i className="icon-chevron-left"></i><span className="returnButton">&nbsp; Regresar a {this.props.previousPage}</span>
               
               </div>
        );
    }

}

export default ReturnButton;