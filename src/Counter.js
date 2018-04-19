import React, {Component} from 'react';
import './App.css';

import Store from './Store';

const initialState = {count: 0}

function updateState(state, action) {
  switch (action.type) {
    case 'INC':
      return {count: state.count + action.amount}
    case 'DEC':
      return {count: state.count - action.amount}
    case 'RES':
      return {count: 0}
    default:
      return state
  }
}

const incAction = {type: 'INC', amount: 1};
const decAction = {type: 'DEC', amount: 1};
const resAction = {type: 'RES'};

const store = new Store(updateState, initialState);

class Counter extends Component {

  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  reset = () => {
    store.update(resAction)
  }

  increment = () => {
    store.update(incAction)
  }

  decrement = () => {
    store.update(decAction)
  }

  handleChange = () => {

  }

  render() {
    return (
      <div className="App">
        <h1>{store.state.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.reset}>reset</button>
        <button onClick={this.decrement}>-</button>
        <br/>
        <h2>Amount</h2>
        <input type="text" value={0} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Counter;
