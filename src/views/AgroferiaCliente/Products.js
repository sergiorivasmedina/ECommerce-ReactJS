import React from 'react';
import Menu from '../../components/AgroferiaCliente/Menu';
import Navigator from '../../components/Vegefoods/Navigator';
import FairHeading from '../../components/Vegefoods/FairHeading';
import ProductList from '../../components/AgroferiaCliente/ProductList';
import APIFerias from '../../services/FairsService';

class Stores extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 1,
            search: '',
            stores: [],
            activeElement: "Todos",
            categories: []
        }
        this.filterCategory = this.filterCategory.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        APIFerias.get('Despliegue/api/producto/categorias/')
          .then(res=> {
            const categories = res.data;
            this.setState({ categories:categories })
          })
          localStorage.setItem('activePage', 3);
      }

    filterCategory(type) {
        var activeElement = document.getElementById(this.state.activeElement);
        activeElement.classList.toggle("active");    
        var element = document.getElementById(type);
        element.classList.toggle("active");    
        this.setState({activeElement: type});
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
                <FairHeading title="Compra nuestros productos" imageUrl="../images/agroferia_tienda1.jpg"/>
                <section className="pt-5">
                    <div className="container">
                        
                        <div className="row">
                        <div className="col-md-12 mb-5 text-center" id="productList">
                            <ul className="product-category">
                                <li><a href="#productList" id="Todos" className="active" onClick={() => this.filterCategory("Todos")}>Todos</a></li>
                                {this.state.categories.map(category => <li><a href="#productList" id={category.idCategoria} onClick={() => this.filterCategory(category.idCategoria)}>{category.nombre}</a></li>)}
                       
                            </ul>
                        </div>
                            <div className="col-md-6" >
                                <h4 className="heading">Lista de productos</h4>
                            </div>
                        </div>
                        
                        <ProductList fairId={this.state.id} filter={this.state.activeElement} name="Lista de productos" search={this.state.search} />
                    </div>

                </section>

            </div>
        );
    }

}

export default Stores;
