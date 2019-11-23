import React, {Component} from 'react';
import OrderDetails from "./components/orderDetails";
import AddItems from "./components/AddItems";

const dishesPrise = [
    {name: 'Hamburger', prise: 80, ico: 'https://image.flaticon.com/icons/png/512/26/26393.png'},
    {name: 'Cheeseburger', prise: 90, ico: 'https://image.flaticon.com/icons/png/512/26/26393.png'},
    {name: 'Fries', prise: 45, ico: 'https://image.flaticon.com/icons/png/512/26/26393.png'},
    {name: 'Coffee', prise: 70, ico: 'https://www.clipartwiki.com/clipimg/detail/43-433867_big-paper-cup-drink-soda-water-svg-png.png'},
    {name: 'Tea', prise: 50, ico: 'https://www.clipartwiki.com/clipimg/detail/43-433867_big-paper-cup-drink-soda-water-svg-png.png'},
    {name: 'Cola', prise: 40, ico: 'https://www.clipartwiki.com/clipimg/detail/43-433867_big-paper-cup-drink-soda-water-svg-png.png'},
];

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
              <AddItems
                  menu={dishesPrise}
              />
            </div>
        );
    }
}

export default App;