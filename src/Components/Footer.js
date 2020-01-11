import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';
import * as iconss from '@fortawesome/free-brands-svg-icons';

function Footer () {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h1>Address</h1>
                        <h3>200, Green road, Mongla, New Yor City USA</h3>
                        <a href="#" className="link">Get Direction</a>
                    </div>
                    <div className="col-md-3">
                        <h1>Reservation</h1>
                        <h2>+10 367 267 2678</h2>
                        <h4>reservation@montana.com</h4>
                    </div>
                    <div className="col-md-3">
                        <h1>Navigation</h1>
                        <ul className="list">
                            <li className="type"><a href="#" className="hom">Home</a></li>
                            <li className="type"><a href="#" className="hom">Rooms</a></li>
                            <li className="type"><a href="#" className="hom">About</a></li>
                            <li className="type"><a href="#" className="hom">News</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h1>NweSletter</h1>
                        <input type="email" placeholder="Enter Your Email" className="input"></input>
                        <h5>Subscribe newsletter to get updates</h5>
                    </div>
                </div>
                <hr className="line"/>
                <span>Copyright ©2019 All rights reserved | This template is made with  by Colorlib</span>
                <div className="icoon">
                    <a className="icon" href="#"><FontAwesomeIcon icon={iconss.faFacebook} /></a>
                    <a className="icon" href="#"><FontAwesomeIcon icon={iconss.faTwitter} /></a>
                    <a className="icon" href="#"><FontAwesomeIcon icon={iconss.faInstagram} /></a>
                </div>
            </div>
        </div>
    );
}
export default Footer;