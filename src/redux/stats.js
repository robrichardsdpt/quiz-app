const initState = {
  totalQuestions: 0,
  score: 0,
  streak: 0
}

const statsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INCREMENT_QUESTION':
      return{...state, 
        totalQuestions: state.totalQuestions +1
      }
    case 'INCREMENT_SCORE':
      return {
      ...state,
      score: state.score +1
    }
    case 'DECREMENT_SCORE':
      return {
        ...state,
        score: state.score -1
      }
    case 'INCREMENT_STREAK':
       return {
        ...state,
        streak: state.streak + 1
      }
    case 'CLEAR_STREAK': 
      return {
        ...state,
        streak: 0
      }
    default:
        return state
  }
}

export default statsReducer