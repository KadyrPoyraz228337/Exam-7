import React from 'react';
import "./style.css";
import Item from "../Item";

const AddItems = props => {
    const prise = props.menu;
    return (
        <div className="addItems">
            {prise.map(item => (
                <Item
                    type={item.type}
                    title={item.name}
                    prise={item.prise}
                />
            ))}
        </div>
    );
};

export default AddItems;