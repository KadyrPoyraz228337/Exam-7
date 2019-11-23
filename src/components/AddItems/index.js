import React from 'react';
import "./style.css";
import Item from "../Item";

const AddItems = props => {
    const prise = props.menu;
    return (
        <div>
            {prise.map(item => (
                <Item
                    logo={item.ico}
                    title={item.name}
                    prise={item.prise}
                />
            ))}
        </div>
    );
};

export default AddItems;