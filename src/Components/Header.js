import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';
import * as iconss from '@fortawesome/free-brands-svg-icons';
import Background from '../images/background.png';


function Header (){
    return(
        <div className="Header">
            <div className="Container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Rooms</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pages</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mx-auto order-0">
                        <a className="navbar-brand mx-auto" href="#">Montana</a>
                        <h3 className="next">Resort</h3>
                    </div>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link icon" href="#"><FontAwesomeIcon icon={iconss.faFacebook} /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link icon" href="#"><FontAwesomeIcon icon={iconss.faTwitter} /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link icon" href="#"><FontAwesomeIcon icon={iconss.faInstagram} /></a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="content">
                    <h1>Life is Beautiful</h1>
                    <p>Unlock to Enjoy the view of Martine</p>
                </div>
            </div>
        </div>
    );
}
export default Header;
