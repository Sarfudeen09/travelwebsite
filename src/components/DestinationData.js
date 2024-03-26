import React from "react";
import "./Destination.css";


const DestinationData = (props) => {
    return (
        <div className={props.className}>
            <div className="first-text">
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
            </div>
            <div className="image">
                <img alt="img" src={props.img1} />
                <img alt="img" src={props.img2} />
            </div>
        </div>
    );
};

export default DestinationData;