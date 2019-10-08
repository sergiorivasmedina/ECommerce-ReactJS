import React from 'react';
import Menu from '../../components/AgroferiaCliente/Menu';
import Navigator from '../../components/Vegefoods/Navigator';
import Heading from '../../components/Vegefoods/Heading';
import StoreList from '../../components/AgroferiaCliente/StoreList';
import SearchBar from '../../components/AgroferiaCliente/SearchBar';

class Stores extends React.Component {
    constructor(){
        super();
        this.state = {
            id: 1,
            search:'',
            stores: []
        }
        
    }

    componentDidMount() {
        
        const {id} = this.props.match.params;
        localStorage.setItem('idFeria', id);
        console.log("probando",localStorage.getItem('idFeria'));
    }

    updateSearch (event){
        this.setState({
            search:event
        })
        console.log(event);
    }

    render() {
        return (
            <div className="Stores">
                <Menu />
                <Heading title="Tiendas" imageUrl="../images/agroferia_tienda1.jpg" />
                <section className="pt-5">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-6">
                            <h4 className="heading">Lista de Tiendas</h4>
                        </div>
                        <div className="col-md-6">
                            <SearchBar search={this.state.search} updateSearch={this.updateSearch.bind(this)}></SearchBar>
                        </div>
                        </div>
                        <StoreList fairId={localStorage.getItem('idFeria')} name="Lista de Tiendas" search={this.state.search}/>
                    </div>
                    
                </section>

            </div>
        );
    }

}

export default Stores;
