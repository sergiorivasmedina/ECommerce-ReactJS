import React from 'react';

class ReturnButton extends React.Component {
    render() {
        let status;



        return (
            <div className="pl-0 col-md-6 col-lg-3">
               <a><i className="icon-chevron-left"></i><span className="returnButton">&nbsp; Regresar a {this.props.previousPage}</span></a>
            </div>
        );
    }

}

export default ReturnButton;