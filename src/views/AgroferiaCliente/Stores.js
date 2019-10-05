import React from 'react';
import Menu from '../../components/AgroferiaCliente/Menu';
import Navigator from '../../components/Vegefoods/Navigator';
import Heading from '../../components/Vegefoods/Heading';
import StoreList from '../../components/AgroferiaCliente/StoreList';


class Stores extends React.Component {
    render() {
        return (
            <div className="Stores">
                <Menu/>
                <Heading title="Tiendas" imageUrl="images/agroferia_tienda1.jpg"/>
                <section>
                    <div className="container">
                        
                            <StoreList name="Lista de Tiendas"/>
                        
                    </div>
                </section>
                
            </div>
        );
    }

}

export default Stores;
