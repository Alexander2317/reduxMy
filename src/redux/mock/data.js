const initialState = { count: 0 }

const constants = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
}

const actions = {
  increment: () => ({
    type: constants.INCREMENT,
  }),
  decrement: () => ({
    type: constants.DECREMENT,
  }),
}

const reducer = (state = initialState, action) => {
  const { type } = action
  const { count } = state

  switch (type) {
    case constants.INCREMENT:
      return { count: count + 1 }
    case constants.DECREMENT:
      return { count: count - 1 }
    default:
      return state
  }
}

const callback = () => {
  console.log('updated')
}

export { initialState, constants, actions, reducer, callback }