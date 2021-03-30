import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import Cards from '../Components/Cards'


export default class Home extends Component {
    render() {
        return (
            <div>
                <CarouselBox />
                <Cards />
            </div>
        )
    }
}
