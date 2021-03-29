import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import northenlights from '../assets/pexels-stein-egil-liland-3408744.jpg'
import mammal from '../assets/pexels-kira-louw-4755029.jpg'
import forest from '../assets/pexels-brady-knoll-3329292.jpg'




export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ northenlights }
                        alt="Northen Lights"
                    />
                    <Carousel.Caption>
                        <h3>Northen Lights</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ mammal }
                        alt="Mammal"
                    />
                    <Carousel.Caption>
                        <h3>Mammal</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ forest }
                        alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3>Forest</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}