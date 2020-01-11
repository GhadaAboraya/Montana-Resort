import React from 'react';
import './Blocks.css';
import Img1 from '../images/img1.png';
import Img2 from '../images/img2.png';
import Img3 from '../images/img3.png';
import Img4 from '../images/img4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';
import * as iconss from '@fortawesome/free-brands-svg-icons';

function Blocks () {
    return (
        <div className="block">
            <div className="row">
                <div className="col-md-3">
                    <a href="#">
                        <figure className="imghvr-fade-right-big">
                            <img src={Img1}/>
                            <figcaption className="fig">
                                <a className="insta" href="#"><FontAwesomeIcon icon={iconss.faInstagram} /></a>
                            </figcaption>
                        </figure>
                     </a>
                </div>
                <div className="col-md-3 col-xs-12">
                    <a href="#">
                        <figure className="imghvr-fade-right-big">
                            <img src={Img2}/>
                            <figcaption className="fig">
                                <a className="insta" href="#"><FontAwesomeIcon icon={iconss.faInstagram} /></a>
                            </figcaption>
                        </figure>
                     </a>
                </div>
                <div className="col-md-3 col-xs-12">
                    <a href="#">
                        <figure className="imghvr-fade-right-big">
                            <img src={Img3}/>
                            <figcaption className="fig">
                                <a className="insta" href="#"><FontAwesomeIcon icon={iconss.faInstagram} /></a>
                            </figcaption>
                        </figure>
                     </a>
                </div>
                <div className="col-md-3 col-xs-12">
                    <a href="#">
                        <figure className="imghvr-fade-right-big">
                            <img src={Img4}/>
                            <figcaption className="fig">
                                <a className="insta" href="#"><FontAwesomeIcon icon={iconss.faInstagram} /></a>
                            </figcaption>
                        </figure>
                     </a>
                </div>
            </div>
        </div>
    );
}
export default Blocks;