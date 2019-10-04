import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Comment from './Comment';

class TestimonyCarousel extends Component {
    render() {
        return (
            <OwlCarousel>                
                <Comment name="Luis Arana" username="Luis" comment="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." imageUrl="images/person_1.jpg"/>
                <Comment name="Carla Cachis" username="Carla" comment="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." imageUrl="images/person_2.jpg"/>
                <Comment name="Daniela Argumanis" username="Daniela" comment="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." imageUrl="images/person_3.jpg"/>
                <Comment name="Karla Pedraza" username="Karla" comment="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." imageUrl="images/person_1.jpg"/>
                <Comment name="Yoluana Gamboa" username="Yoluana" comment="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." imageUrl="images/person_2.jpg"/>
                <Comment name="Ronie Arauco" username="Ronie" comment="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." imageUrl="images/person_3.jpg"/>
            </OwlCarousel>
        )
    }
}

export default TestimonyCarousel;