import React, {Component} from 'react';
import OrderDetails from "./components/orderDetails";
import AddItems from "./components/AddItems";

class App extends Component {
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