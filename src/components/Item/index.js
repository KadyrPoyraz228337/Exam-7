import React from 'react';
import "./style.css";

const Item = props => {
    return (
        <div className="card">
            <img src={props.logo} alt="Dish photo"/>
            <div>
                <h4>{props.title}</h4>
                <p>Prise: {props.prise}kgs</p>
            </div>
        </div>
    );
};

export default Item;