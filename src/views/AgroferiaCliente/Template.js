import React from 'react';
import Menu from '../../components/AgroferiaCliente/Menu';
import Heading from '../../components/Vegefoods/Heading';

import TemplateComponent from '../../components/AgroferiaCliente/TemplateComponent';
import FooterComponent from '../../components/AgroferiaCliente/FooterComponent';



class Template extends React.Component {
    render() {
        return (
            <div className="Template">
                <Menu fairId={sessionStorage.getItem('idFeria')}/>
                <Heading title="Template View" imageUrl="images/bg_1.jpg" />

                <section className="ftco-section">
                    <div className="container">
                        <div className="row no-gutters ftco-services">

                            <TemplateComponent name="Template Componente" description="This is a template component" icon="flaticon-shipped" />
                            
                        </div>
                    </div>
                </section>
                <FooterComponent />
            </div>
        );
    }

}

export default Template;
