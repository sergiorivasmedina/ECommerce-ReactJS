import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import SearchBarMenu from '../../components/AgroferiaCliente/SearchBarMenu';
import APIFerias from '../../services/FairsService'
import Autosuggest from 'react-autosuggest';

const listaPrueba= [
    {
    name: 'Tienda 1',
    year: 1972
  },
  {
    name: 'Tienda 2',
    year: 2012
  }]
const getSuggestionValue = suggestion => suggestion.name;
const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0 ? [] : listaPrueba.filter(lang =>
      lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  }

  const renderSuggestion = suggestion => (
    <div>
      {suggestion.name}
    </div>
  )


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'AGROFERIAS CAMPESINAS',
            client: null,
            cantprod: 0,
            user: "",
            id: 1,
            search: '',
            stores: [],
            listT: [],
            listP: [],
            tienda: null,
            fairs: null,
            listaPrueba: [
                {
                name: 'Tienda 1',
                year: 1972
              },
              {
                name: 'Tienda 2',
                year: 2012
              }],
            suggestions: [],
            value:''
        };

        

    }
   
    onChange = (event, { newValue }) => {
        this.setState({
          value: newValue
        });
      };

    componentDidMount() {
        if (sessionStorage.getItem("idUsuario")) {
            var idUSer = sessionStorage.getItem("idUsuario");
            var idCliente = sessionStorage.getItem("idCliente");
            this.setState({ user: idCliente });
            /*APIFerias.get('Despliegue/api/pedido/' + idCliente)
                .then(res => {
                    //traer el detallePedido del idPedido, el cual es el actual
                    APIFerias.get('Despliegue/api/pedido/' + res.data.idPedido + '/detalle')
                        .then(response => {
                            const detalless = response.data;
                            this.setState({ cantprod: response.data.length })
                        })
                })
*/
            APIFerias.get('/Despliegue/api/usuario/cliente/' + idCliente)
                .then(res => {
                    const client = res.data;
                    this.setState({ client: client, nombre: client.nombres, cierre: "Salir" })
                })
        }
        //todas las tiendas
        APIFerias.get('/Despliegue/api/tiendas/feria/virtual/' + this.state.id)
            .then(res => {
                const lista = res.data;
                this.setState({ listT: lista })
                console.log(this.state.list);
            })

        //todas los productos
        APIFerias.get('Despliegue/api/productos/feria_promociones/' + this.state.id)
            .then(res => {
                const products = res.data;
                this.setState({ listP: products });

            })

    }
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
          suggestions: getSuggestions(value)
        });
      }
      onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
        });
      }
    
    render() {
        var bottomProducts = "nav-link";
        var bottomStores = "nav-link";

        if (localStorage.getItem('activePage') == 2) {
            bottomStores = "nav-link pinkBottom";
        } else if (localStorage.getItem('activePage') == 3) {
            bottomProducts = "nav-link pinkBottom";
        }
        var userActions;
        var basketUrl;

        if(this.state.user == "") {
            basketUrl = "/login"
            userActions = <ul className="navbar-nav ml-auto row">



                <li className="nav-item active dropdown show">
                    <a className="nav-link text-left" href="/login" id="dropdown04" aria-haspopup="true" aria-expanded="true"><span className="mediumIcon icon-person pink pr-1"></span><span className="pink">INICIAR SESIÓN</span></a>

                </li>
            </ul>
        } else {
            basketUrl = "/Canasta"
            userActions = <ul className="navbar-nav ml-auto row">

                <li className="nav-item active dropdown">
                    <a className="nav-link dropdown-toggle text-left" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span className="mediumIcon icon-person pink"></span><span className="pink">{this.state.nombre}</span></a>
                    <div className="dropdown-menu" aria-labelledby="dropdown04">

                        <a className="dropdown-item" href="/historial"><span>HISTORIAL DE PEDIDOS</span></a>
                        <a className="dropdown-item" href="/perfil"><span>PERFIL</span></a>
                        <a className="dropdown-item" href="/login"><span>CERRAR SESIÓN</span></a>
                    </div>
                </li>
            </ul>
        }
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: 'Type...',
            value,
            name:"buscador",
            autoComplete: "abcd",
            onChange: this.onChange
          };
        return (
            <nav className="navbar navbar-expand-lg ftco-navbar-light customBorder" id="ftco-navbar">
                <div className="container pt-3">


                    {/*<Link to="/" ><h5 className="white"> {this.state.value}</h5></Link>*/}

                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-md-4 text-right">
                                <img className="img-fluid customLogo" src="https://static.wixstatic.com/media/ca3438_d19b292fe67d48a9850302656b8968cb~mv2.jpg/v1/fill/w_190,h_190,al_c,q_80,usm_0.66_1.00_0.01/Untitled.jpg" alt="Colorlib Template" />
                            </div>
                            <div className="col-md-8">
                                <Autosuggest  
                                    inputProps={inputProps}
                                    suggestions={suggestions}
                                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                    getSuggestionValue={getSuggestionValue}
                                    renderSuggestion={renderSuggestion}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 text-center">
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav ml-auto row">

                                <li className="nav-item"><label className="nav-link pinkButton"><Link to="/Ferias" ><span className="gray">FERIAS</span></Link></label></li>

                                <li className="nav-item"><label className={bottomStores}><Link to={"/tiendas"}><span className="gray">TIENDAS</span></Link></label></li>
                                <li className="nav-item"><label className={bottomProducts}><Link to="/Productos"><span className="gray">PRODUCTOS</span></Link></label></li>


                                {/* ACTIVAR PARA SIGUIENTE SPRINT <li className="nav-item"><label className="nav-link"><Link to="/Map">MAPS</Link></label></li>
                            <li className="nav-item"><label className="nav-link"><Link to="/Calendar">CALENDARIO</Link></label></li> */}

                                <li className="nav-item cta cta-colored"><label className="nav-link"><Link to={basketUrl}><span className="icons icon-shopping_basket pink"></span><span>[{this.state.cantprod}]</span></Link></label></li>



                                {userActions}

                                {/*<li className="nav-item"><label className="nav-link"><Link to="/login" ><h8 className="gray"> {this.state.cierre}</h8></Link></label></li>*/}


                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Menu;