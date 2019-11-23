import React from 'react';
import "./style.css";
import Item from "../Item";

const AddItems = props => {
    const prise = props.menu;
    return (
        <div className="addItems">
            {prise.map(item => {
                return <Item
                    key={item.name}
                    type={item.type}
                    title={item.name}
                    prise={item.prise}
                    onClick={() => props.onClicik(item.name)}
                />
            })}
        </div>
    );
};

export default AddItems;