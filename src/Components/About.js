import React from 'react';
import './About.css';
import About1 from '../images/about1.png';
import About2 from '../images/about2.png';


function About (){
    return(
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <span>About Us</span>
                        <h1>A Luxuries Hotel with Nature</h1>
                        <p>Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et. Rhoncus.</p>
                        <a href="#" className="button">Learn More</a>
                    </div>
                    <div className="col-md-3">
                        <img src={About1} className="img1"/>
                    </div>
                    <div className="col-md-3">
                        <img src={About2} className="img2"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;