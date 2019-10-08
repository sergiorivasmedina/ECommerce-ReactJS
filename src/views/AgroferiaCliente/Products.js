import React from 'react';
import Menu from '../../components/AgroferiaCliente/Menu';
import Navigator from '../../components/Vegefoods/Navigator';
import Heading from '../../components/Vegefoods/Heading';
import ProductList from '../../components/AgroferiaCliente/ProductList';

class Stores extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 1,
            search: '',
            stores: []
        }

    }


    updateSearch(event) {
        this.setState({
            search: event
        })
        console.log(event);
    }

    render() {
        return (
            <div className="Products">
                <Menu />
                <Heading title="Productos" imageUrl="../images/agroferia_tienda1.jpg" />
                <section className="pt-5">
                    <div className="container">
                        
                        <div className="row">
                        <div class="col-md-12 mb-5 text-center">
                            <ul class="product-category">
                                <li><a href="#" class="active">Todos</a></li>
                                <li><a href="#">Frutas</a></li>
                                <li><a href="#">Vegetales</a></li>
                                <li><a href="#">Tubérculos</a></li>
                                <li><a href="#">Lácteos</a></li>
                            </ul>
                        </div>
                            <div className="col-md-6">
                                <h4 className="heading">Lista de Productos</h4>
                            </div>
                        </div>
                        
                        <ProductList fairId={this.state.id} name="Lista de productos" search={this.state.search} />
                    </div>

                </section>

            </div>
        );
    }

}

export default Stores;
