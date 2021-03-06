import React, { Component } from 'react'

import { createStore } from '../../redux'

/*
 * State
 * */

const initialState = { count: 0 }

/*
 * Constants
 * */

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

/*
 * Reducer
 * */

function reducer(state = initialState, action) {
  const { count } = state
  const { type, amount } = action

  switch (type) {
    case INCREMENT:
      return { count: count + amount }
    case DECREMENT:
      return { count: count - amount }
    case RESET:
      return { count: 0 }
    default:
      return state
  }
}

/*
 * Actions
 * */

const incrementAction = (amount) => ({
  type: INCREMENT,
  amount,
})

const decrementAction = (amount) => ({
  type: DECREMENT,
  amount,
})

const resetAction = () => ({
  type: RESET,
})

/*
 * Create store
 * */

const store = new createStore(reducer, initialState)

/*
 * Component
 * */

class Counter extends Component {
  state = {
    valueAmount: 0,
  }

  update = () => this.forceUpdate()

  componentDidMount() {
    store.subscribe(this.update)
  }

  componentWillUnmount() {
    const unsubscribe = store.subscribe(this.update)
    unsubscribe()
  }

  reset = () => store.dispatch(resetAction())

  increment = () => store.dispatch(incrementAction(this.state.valueAmount))

  decrement = () => store.dispatch(decrementAction(this.state.valueAmount))

  handleChange = (e) =>
    this.setState({
      valueAmount: parseInt(e.target.value),
    })

  render() {
    const count = store.getState().count

    return (
      <section className="container">
        <h1 data-testid="title" className="container__title">
          {count}
        </h1>
        <button
          data-testid="button-increment"
          className="container__button"
          onClick={this.increment}
        >
          +
        </button>
        <button
          data-testid="button-reset"
          className="container__button"
          onClick={this.reset}
        >
          reset
        </button>
        <button
          data-testid="button-decrement"
          className="container__button"
          onClick={this.decrement}
        >
          -
        </button>
        <br />
        <h2 data-testid="subtitle" className="container__subtitle">
          Amount
        </h2>
        <input
          data-testid="input"
          className="container__input"
          type="text"
          value={this.state.valueAmount}
          onChange={this.handleChange}
        />
      </section>
    )
  }
}

export default Counter
