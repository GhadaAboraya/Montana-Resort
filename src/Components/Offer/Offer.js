import React from 'react';
import './Offer.css';


function Offer(props) {
    return (
    <div className="col-md-4 offer">
        <div className="image-holder">
            <img src={`../${props.imgUrl}`} />
        </div>
        <h3>{props.title}</h3>
        <ul className="list">
            {props.list.map((el) => {
                return <li className="dataList">{el}</li>
            })}
        </ul>
        <button className="book">Book Now</button>
    </div>
    )
}

export default Offer; 