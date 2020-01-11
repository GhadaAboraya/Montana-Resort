import React from 'react';
import './Food.css';
import Food1 from '../images/food1.png';
import Food2 from '../images/food2.png';

function Food () {
    return (
        <div className="food">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img className="img3" src={Food1}/>
                    </div>
                    <div className="col-md-3">
                        <img className="img4" src={Food2}/>
                    </div>
                    <div className="col-md-6">
                        <span>Delicious Food</span>
                        <h1>We Serve Fresh and Delicious Food</h1>
                        <p>Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et. Rhoncus.</p>
                        <a href="#" className="button">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Food;