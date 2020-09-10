import Store from '../store'
import { initialState, actions, reducer, callback } from '../mock/data'

let store

describe('Store tests', () => {
  beforeEach(() => {
    store = new Store(reducer, initialState)
    const unsubscribe = store.subscribe(callback)
    unsubscribe()
  })

  it('getState', () => {
    expect(store.state.count).toBe(0)
  })

  it('increment action', () => {
    store.update(actions.increment())
    store.subscribe(callback)
    expect(store.state.count).toBe(1)
  })

  it('decrement action', () => {
    store.update(actions.decrement())
    store.subscribe(callback)
    expect(store.state.count).toBe(-1)
  })
})
