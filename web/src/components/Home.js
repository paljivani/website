import React from "react";
import Header from "./Header";
import './Com.css'
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
    return (
        <div>
            <Header />
            <div className="home">
                
                    <div>
                        <Carousel>
                            
                            <Carousel.Item>
                            
                                <img
                                    className="d-block w-100 img-1"/>
                                <Carousel.Caption className="section1">
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    <button className="my-button">Shop now</button>
                                </Carousel.Caption>
                                
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                    className="d-block w-100 img-2"/>
                                <Carousel.Caption className="section1">
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <button className="my-button">Shop now</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
               
            <Footer />
        </div>

    );
}

export default Home;
