import React, {Component} from 'react';
import './App.css';

import {createStore} from 'redux';

const initialState = {count: 0}

function reducer(state = {count: 0}, action) {
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

function inc(amount) {
  return {
    type: 'INC',
    amount
  }
}

function dec(amount) {
  return {
    type: 'DEC',
    amount
  }
}

function res() {
  return {
    type: 'RES',
  }
}

const store = new createStore(reducer, initialState);

class Counter extends Component {
  state = {
    valueAmount: 0
  }

  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  reset = () => {
    store.dispatch(res())
  }

  increment = () => {
    let amount = parseInt(this.state.valueAmount);
    store.dispatch(inc(amount))
  }

  decrement = () => {
    let amount = parseInt(this.state.valueAmount);
    store.dispatch(dec(amount))
  }

  handleChange = (e) => {
   this.setState({
     valueAmount: e.target.value
   })
  }

  render() {
    const count = store.getState().count;
    return (
      <div className="App">
        <h1>{count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.reset}>reset</button>
        <button onClick={this.decrement}>-</button>
        <br/>
        <h2>Amount</h2>
        <input type="text" value={this.state.valueAmount} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Counter;
