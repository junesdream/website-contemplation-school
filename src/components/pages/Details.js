import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Details.css";

const Details = () => {
  return ( 
  <div>
<div className="details">

    <div className="details-text">

        <h1>All you have to do for  <span>Journey</span> </h1>
        <p>Register</p>
        <p>Get for infos</p>
        <p>Take the trial</p>
        <p>Turn on</p>
        <p>Open inside</p>
        <p>SET you free</p>

        <div className="done-btn">
            <Link  to="/"> Done</Link>
        </div>
    </div>
</div>
  </div>
  );
};

export default Details;
