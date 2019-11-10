import React from 'react';
import Menu from '../../components/AgroferiaCliente/Menu';
import Heading from '../../components/Vegefoods/Heading';
import FooterComponent from '../../components/AgroferiaCliente/FooterComponent';

class OrderSummary extends React.Component{
    render(){
        return(
            <div>
                <Menu />
                <Heading title="Pago" imageUrl="../images/agroferia_tienda1.jpg" />
                <FooterComponent/>
            </div>
        )
    }
}

export default OrderSummary;