const initialState = {
  favorite: []
}

function favoriteReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case 'FAVORITE/ADDFAVORITE':
      return { ...state, favorite: [...state.favorite, payload] }
    default:
      return state
  }
}

export default favoriteReducer