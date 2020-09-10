import Store from '../store'

let store

const initialState = { count: 0 }

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const reducer = (state = initialState, action) => {
  const { type } = action
  const { count } = state
  switch (type) {
    case INCREMENT:
      return { count: count + 1 }
    case DECREMENT:
      return { count: count - 1 }
    default:
      return state
  }
}

describe('Store tests', () => {
  beforeEach(() => {
    store = new Store(reducer, initialState)
    const unsubscribe = store.subscribe()
    unsubscribe()
  })

  it('getState', () => {
    expect(store.state.count).toBe(0)
  })

  it('increment action', () => {
    store.update({ type: INCREMENT })
    store.subscribe()
    expect(store.state.count).toBe(1)
  })

  it('decrement action', () => {
    store.update({ type: DECREMENT })
    store.subscribe()
    expect(store.state.count).toBe(-1)
  })
})
