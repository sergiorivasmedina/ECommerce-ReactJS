import React from 'react';
import { Link } from 'react-router-dom';
import {Row,Col} from 'react-bootstrap';
import SearchBarMenu from '../../components/AgroferiaCliente/SearchBarMenu';
import APIFerias from '../../services/FairsService'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: 'AGROFERIAS CAMPESINAS',
            client: null };
            

    }

    componentDidMount(){
        

        if (sessionStorage.getItem("idUsuario")) {
            var idUSer = sessionStorage.getItem("idUsuario");
          

        APIFerias.get('/Despliegue/api/usuario/cliente/'+ idUSer)
      .then(res=> {
        const client = res.data;
        this.setState({ client:client, nombre:client.nombres })
        console.log(this.state.client);
      })}

    
      }

    render() {
        return (
            <nav className="navbar navbar-expand-lg  bg-pink ftco-navbar-light" id="ftco-navbar">
                <div className="container pt-3">
                <img className="img-fluid" src="../images/AgroferiaCliente/logoap.png" alt="Colorlib Template" />    
            
                <Link to="/" ><h5 className="white"> {this.state.value}</h5></Link>
                    <Row>
                        <Col md={4} >
                        <SearchBarMenu ></SearchBarMenu>
                        </Col>
                    <Col md={5}>    
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item" ><label className="nav-link"><Link to="/Ferias" ><span className="white">FERIAS</span></Link></label></li>

                            <li className="nav-item"><label className="nav-link"><Link to={"/tiendas/" + localStorage.getItem('idFeria')}><span className="white">TIENDAS</span></Link></label></li>
                            <li className="nav-item"><label className="nav-link"><Link to="/Productos"><span className="white">PRODUCTOS</span></Link></label></li>


                            {/* ACTIVAR PARA SIGUIENTE SPRINT <li className="nav-item"><label className="nav-link"><Link to="/Map">MAPS</Link></label></li>
                            <li className="nav-item"><label className="nav-link"><Link to="/Calendar">CALENDARIO</Link></label></li> */}
                            
                            <li className="nav-item cta cta-colored "><label className="nav-link"><Link to="/Canasta"><span className="icons icon-shopping_basket"></span><span className="white">[0]</span></Link></label></li>
                            <li className="nav-item cta cta-colored "><label className="nav-link"><Link to="/Login"><span className="icons icon-person"></span></Link></label></li>
                            <Link to="/perfil" ><h8 className="white"> {this.state.nombre}</h8></Link>

                        </ul>
                    </div>
                    </Col>
                    </Row>
                </div>
            </nav>
        );
    }

}

export default Menu;