import React, {Component} from 'react';
import './App.css';

import Store from './Store';

const initialState = { count: 0 }

class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  }

  handleChange = () => {

  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <br/>
        <h2>Amount</h2>
        <input type="text" value={0} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Counter;
