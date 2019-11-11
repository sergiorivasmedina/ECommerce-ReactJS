import React from 'react';
import Menu from '../../components/AgroferiaCliente/Menu';
import Heading from '../../components/Vegefoods/Heading';
import FooterComponent from '../../components/AgroferiaCliente/FooterComponent';
import FairHeading from '../../components/Vegefoods/FairHeading';
import APIFerias from '../../services/FairsService';

class OrderSummary extends React.Component{
    

    render(){
        return(
            <div>
                <Menu />
                <FairHeading title="Resumen de compra" imageUrl="../images/agroferia_tienda1.jpg" />
                <FooterComponent/>
            </div>
        )
    }
}

export default OrderSummary;