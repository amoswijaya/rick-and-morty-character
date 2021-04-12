const initialState = {
  characters: [],
  character: {},
  loading: false,
  searchProduct: ''
}

function characterReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'CHARACTER/GETCHARACTERS':
      return { ...state, characters: payload }
    case 'CHARACTER/GETCHARACTER':
      return { ...state, character: payload }
    case 'CHARACTER/LOADING':
      return { ...state, loading: payload }
    case 'CHARACTER/SEARCH':
      return { ...state, searchProduct: payload }
    default:
      return state
  }
}

export default characterReducer