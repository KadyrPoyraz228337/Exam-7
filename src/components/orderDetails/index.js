import React, {Fragment} from 'react';
import "./style.css";
import Detail from "../Detail";
let count = 0;
const OrderDetails = props => {
    return (
        <Fragment>
            {count < 0 && <p>123</p>}
            <ul>
                {props.state.map((elem, index) => {
                    count++;
                    return elem.count > 0 && <Detail
                        name={elem.name}
                        count={elem.count}
                        prise={props.prise[index].prise * elem.count}
                        onClick={() => props.onClick(elem.name)}
                    />
                })}
            </ul>
        </Fragment>
    );
};

export default OrderDetails;