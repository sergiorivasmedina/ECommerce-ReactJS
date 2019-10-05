import React from 'react';
import Navigator from '../../components/Vegefoods/Navigator';
import Heading from '../../components/Vegefoods/Heading';
import StoreList from '../../components/AgroferiaCliente/StoreList';

class Store extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
          store: []
        };
      }

    render() {
        return(
            <div>
                <Navigator/>
                <Heading title="Tiendas" imageUrl="images/agroferia_tienda1.jpg"/>
                <section>
                    <div className="container">
                        <div className="row no-gutters ftco-services">
                            <StoreList name="Lista de Tiendas"/>
                        </div>
                    </div>
                </section>

            </div>
        )        
    }

}

export default Store;