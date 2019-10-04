import React from 'react';
import Navigator from '../../components/Vegefoods/Navigator';
import Product from '../../components/Vegefoods/Product';
import Footer from '../../components/Vegefoods/Footer';
import Subscribe from '../../components/Vegefoods/Subscribe';
import Heading from '../../components/Vegefoods/Heading';
import TemplateComponent from '../../components/AgroferiaCliente/TemplateComponent';


class Template extends React.Component {
    render() {
        return (
            <div className="Template">
                <Navigator />
                <Heading title="Template View" imageUrl="images/bg_1.jpg" />

                <section className="ftco-section">
                    <div className="container">
                        <div className="row no-gutters ftco-services">

                            <TemplateComponent name="Template Componente" description="This is a template component" icon="flaticon-shipped" />
                            
                        </div>
                    </div>
                </section>
                <Subscribe />
                <Footer />
            </div>
        );
    }

}

export default Template;
