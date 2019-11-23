import React from 'react';
import "./style.css";

const Item = props => {
    const type = props.type;
    let logo;
    if(type === 'dish') {
        logo = 'https://image.flaticon.com/icons/png/512/26/26393.png'
    } else {
        logo = 'https://www.clipartwiki.com/clipimg/detail/43-433867_big-paper-cup-drink-soda-water-svg-png.png'
    }
    return (
        <div className="card">
            <img src={logo} alt="Dish photo"/>
            <div>
                <h4>{props.title}</h4>
                <p>Prise: {props.prise}kgs</p>
            </div>
        </div>
    );
};

export default Item;