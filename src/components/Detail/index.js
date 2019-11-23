import React from 'react';
import './style.css';

const Detail = props => {
    return (
        <li>
            <p>{props.name}<span>x{props.count} {props.prise}</span><button onClick={props.onClick}>&#215;</button></p>
        </li>
    );
};

export default Detail;