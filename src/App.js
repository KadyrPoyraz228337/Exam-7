import React, {Component} from 'react';
import OrderDetails from "./components/orderDetails";
import AddItems from "./components/AddItems";
import "./App.css";

const dishesPrise = [
    {name: 'Hamburger', prise: 80, type: 'dish'},
    {name: 'Cheeseburger', prise: 90, type: 'dish'},
    {name: 'Fries', prise: 45, type: 'dish'},
    {name: 'Coffee', prise: 70, type: 'drink'},
    {name: 'Tea', prise: 50, type: 'drink'},
    {name: 'Cola', prise: 40, type: 'drink'},
];

class App extends Component {
    localStorage = localStorage.getItem('items');
    state = this.localStorage ? {items: JSON.parse(localStorage.getItem('items'))} : {
        items: [
            {name: 'Hamburger', count: 0},
            {name: 'Cheeseburger', count: 0},
            {name: 'Fries', count: 0},
            {name: 'Coffee', count: 0},
            {name: 'Tea', count: 0},
            {name: 'Cola', count: 0},
        ]
    };

    addDish = name => {
        const items = [...this.state.items];
        const index = items.findIndex(elem => elem.name === name);
        items[index].count++;

        localStorage.setItem('items', JSON.stringify(items));
        this.setState({items});
    };

    removeDish = name => {
        const items = [...this.state.items];
        const index = items.findIndex(elem => elem.name === name);
        items[index].count--;

        localStorage.setItem('items', JSON.stringify(items));
        this.setState({items});
    }

    render() {

        return (
            <div className="appBlock">
              <OrderDetails
                state={this.state.items}
                prise={dishesPrise}
                onClick={this.removeDish}
              />
              <AddItems
                  menu={dishesPrise}
                  onClicik={this.addDish}
              />
            </div>
        );
    }
}

export default App;