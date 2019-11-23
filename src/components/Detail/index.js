import React from 'react';
import './style.css';

const Detail = props => {
    return (
        <li>
            <p>{props.name}<span>{props.count} {props.prise}</span></p>
        </li>
    );
};

export default Detail;