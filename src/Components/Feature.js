import React from "react";
import "./Feature.css";
import View1 from "../images/view1.png";
import View2 from "../images/view2.png";
import View3 from "../images/view3.png";
import View4 from "../images/view4.png";

function Feature() {
  return (
    <div className="feature">
      <div className="container">
        <div className="heading">
          <span>Featured Rooms</span>
          <h1>Choose a Better Room</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="imgzoom">
            <img src={View1} alt="" />
          </div>
          <div className="data">
            <span className="span2">From $250/night</span>
            <h1>Superior Room</h1>
          </div>
          <div className="back">
            <a href="#">Back</a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="imgzoom">
            <img src={View2} alt="" />
          </div>
          <div className="data">
            <span className="span2">From $250/night</span>
            <h1>Deluxe Room</h1>
          </div>
          <div className="back">
            <a href="#">Back</a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="imgzoom">
            <img src={View3} alt="" />
          </div>
          <div className="data">
            <span className="span2">From $250/night</span>
            <h1>Signature Room</h1>
          </div>
          <div className="back">
            <a href="#">Back</a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="imgzoom">
            <img src={View4} alt="" />
          </div>
          <div className="data">
            <span className="span2">From $250/night</span>
            <h1>Couple Room</h1>
          </div>
          <div className="back">
            <a href="#">Back</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Feature;
