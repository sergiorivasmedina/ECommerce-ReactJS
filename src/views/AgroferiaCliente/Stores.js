import React from 'react';
import Menu from '../../components/AgroferiaCliente/Menu';
import Navigator from '../../components/Vegefoods/Navigator';
import Heading from '../../components/Vegefoods/Heading';
import StoreList from '../../components/AgroferiaCliente/StoreList';
import SearchBar from '../../components/AgroferiaCliente/SearchBar';
import FooterComponent from '../../components/AgroferiaCliente/FooterComponent';
import FairHeading from '../../components/Vegefoods/FairHeading';

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
        window.scrollTo(0, 0);
    }

    componentWillReceiveProps() {

    }

    componentWillMount() {
        
        
        
        console.log("probando",sessionStorage.getItem('idFeria'));
        localStorage.setItem('activePage', 2);
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
                <Menu fairId={sessionStorage.getItem('idFeria')}/>
                <FairHeading title="Conoce nuestras tiendas" imageUrl="../images/agroferia_tienda1.jpg"/>
                <section className="pt-5">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-6">
                            <h4 className="heading">Lista de tiendas</h4>
                        </div>
                        <div className="col-md-6">
                            <SearchBar search={this.state.search} updateSearch={this.updateSearch.bind(this)}></SearchBar>
                        </div>
                        </div>
                        <StoreList fairId={sessionStorage.getItem('idFeria')} name="Lista de Tiendas" search={this.state.search}/>
                    </div>
                    
                </section>
                <FooterComponent />
            </div>
        );
    }

}

export default Stores;
