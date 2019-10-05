import React from 'react';
import Menu from '../../components/AgroferiaCliente/Menu';
import Navigator from '../../components/Vegefoods/Navigator';
import Heading from '../../components/Vegefoods/Heading';
import StoreList from '../../components/AgroferiaCliente/StoreList';
import SearchBar from '../../components/AgroferiaCliente/SearchBar';


class Stores extends React.Component {


    render() {
        return (
            <div className="Stores">
                <Menu />
                <Heading title="Tiendas" imageUrl="images/agroferia_tienda1.jpg" />
                <section className="pt-5">
                    <div className="container">
                        <div className="row">
                        <div class="col-md-6">
                            <h4 className="heading">Lista de Tiendas</h4>
                        </div>
                        <div class="col-md-6">
                            <SearchBar></SearchBar>
                        </div>
                        </div>
                        <StoreList name="Lista de Tiendas" />
                    </div>
                    
                </section>

            </div>
        );
    }

}

export default Stores;
