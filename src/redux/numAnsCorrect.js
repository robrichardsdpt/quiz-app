const initState = {
  number: 0
}

const numAnsCorrectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INCREMENT_NUMBER':
      return{...state, 
        number: state.number +1
      }
      default:
        return state
  }
}

export default numAnsCorrectReducer