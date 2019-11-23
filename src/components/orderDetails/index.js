import React, {Fragment} from 'react';
import "./style.css";
import Detail from "../Detail";
const OrderDetails = props => {
    let total = 0;
    return (
        <Fragment>
            <ul>
                {props.state.map((elem, index) => {
                    total += props.prise[index].prise * elem.count;
                    return elem.count > 0 && <Detail
                        key={elem.name}
                        name={elem.name}
                        count={elem.count}
                        prise={props.prise[index].prise * elem.count}
                        onClick={() => props.onClick(elem.name)}
                    />;
                })}
                {total === 0 && <li>Order is empty!</li>}
                {total === 0 && <li>Please add some items!</li>}
                {total > 0 && <li className="total"><p>total {total} KGS</p></li>}
            </ul>
        </Fragment>
    );
};

export default OrderDetails;