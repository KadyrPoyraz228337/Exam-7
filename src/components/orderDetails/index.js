import React from 'react';
import "./style.css";
import Detail from "../Detail";

const OrderDetails = props => {
    return (
        <ul>
            {props.state.map((elem, index) => (
                elem.count > 0 && <Detail
                    name={elem.name}
                    count={elem.count}
                    prise={props.prise[index].prise * elem.count}
                />
            ))}
        </ul>
    );
};

export default OrderDetails;