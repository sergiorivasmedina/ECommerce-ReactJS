import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProducerCard from '../../components/AgroferiaCliente/ProducerCard'
import Comment from '../Vegefoods/Comment'

class ProducerCarousel extends Component {
    render() {
        return (
            <OwlCarousel>                
                <Comment name="Luis Arana" username="Luis" comment="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." imageUrl="images/person_1.jpg"/>
                <Comment name="Carla Cachis" username="Carla" comment="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." imageUrl="images/person_2.jpg"/>
                <Comment name="Daniela Argumanis" username="Daniela" comment="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." imageUrl="images/person_3.jpg"/>
                <Comment name="Karla Pedraza" username="Karla" comment="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." imageUrl="images/person_1.jpg"/>
                
            </OwlCarousel>
        )
    }
}

export default ProducerCarousel;