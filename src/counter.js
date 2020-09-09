import { Store } from './redux'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

function updateState(state, action) {
  const { count } = state
  const { type, amount } = action

  switch (type) {
    case INCREMENT:
      return { count: count + amount }
    case DECREMENT:
      return { count: count - amount }
    default:
      return state
  }
}

let initialState = { count: 0 }

const store = new Store(updateState, initialState)

const increment = { type: INCREMENT, amount: 5 }
const decrement = { type: DECREMENT, amount: 3 }

store.subscribe(() => {
  console.log('State changed 2', store.state)
})

store.update(increment)
store.update(decrement)
store.update({})
