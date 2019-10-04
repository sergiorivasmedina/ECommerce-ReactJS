import React from 'react';
import Navigator from '../../components/Vegefoods/Navigator';
import Product from '../../components/Vegefoods/Product';
import Footer from '../../components/Vegefoods/Footer';
import Subscribe from '../../components/Vegefoods/Subscribe';
import Heading from '../../components/Vegefoods/Heading';


class NotFound extends React.Component {
    render() {
        return (
            <div className="NotFound">
                <Navigator />
                <Heading title="Not Found" imageUrl="images/bg_1.jpg" />
                <Subscribe />
                <Footer />
            </div>
        );
    }

}

export default NotFound;
