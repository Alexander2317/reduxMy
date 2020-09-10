import createStore from '../redux'
import { initialState, actions, reducer, callback } from '../mock/data'

let store

describe('Store tests', () => {
  beforeEach(() => {
    store = new createStore(reducer, initialState)
    const unsubscribe = store.subscribe(callback)
    unsubscribe()
  })

  it('getState', () => {
    expect(store.getState().count).toBe(0)
  })

  it('increment action', () => {
    store.dispatch(actions.increment())
    store.subscribe(callback)
    expect(store.getState().count).toBe(1)
  })

  it('decrement action', () => {
    store.dispatch(actions.decrement())
    store.subscribe(callback)
    expect(store.getState().count).toBe(-1)
  })
})
