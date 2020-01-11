import React, { Component } from 'react';
import './Offers.css';

import Offer from './Offer/Offer'

import Img1 from '../images/offer1.png';
import Img2 from '../images/offer2.png';
import Img3 from '../images/offer3.png';


class Offers extends Component {
    state = {
        offersRequest: [
            {
                title: "Up to 35% savings on Club rooms and Suites",
                imgUrl: Img1, 
                list: ["Luxaries condition", "3 Adults & 2 Children size", "Sea view side"] 
            },
            {
                title: "Up to 35% savings on Club rooms and Suites",
                imgUrl: Img2, 
                list: ["Luxaries condition", "3 Adults & 2 Children size", "Sea view side"] 
            },
            {
                title: "Up to 35% savings on Club rooms and Suites",
                imgUrl: Img3, 
                list: ["Luxaries condition", "3 Adults & 2 Children size", "Sea view side"] 
            },
        ]
    }
    render() {
        return (
            <div className="offers">
                <div className="container">
                    <span>Our Offers</span>
                    <h1>Ongoing Offers</h1>
                    <div className="row">
                        {this.state.offersRequest.map((el) => {
                            return <Offer title={el.title} imgUrl={el.imgUrl} list={el.list}  />
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
export default Offers;