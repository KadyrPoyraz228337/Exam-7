import React, {Component} from 'react';
import OrderDetails from "./components/orderDetails";
import AddItems from "./components/AddItems";

class App extends Component {
    state = {
        items: [
            {name: 'Hamburger', count: 0},
            {name: 'Cheeseburger', count: 0},
            {name: 'Fries', count: 0},
            {name: 'Coffee', count: 0},
            {name: 'Tea', count: 0},
            {name: 'Cola', count: 0},
        ]
    };

    render() {
        return (
            <div>
              <OrderDetails/>
              <AddItems/>
            </div>
        );
    }
}

export default App;