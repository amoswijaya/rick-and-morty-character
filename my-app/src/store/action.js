
export function addFavorite(payload) {
  return { type: 'FAVORITE/ADDFAVORITE', payload }
}

export function setCharacters(payload) {
  return { type: 'CHARACTER/GETCHARACTERS', payload }
}

export function setCharacter(payload) {
  return { type: 'CHARACTER/GETCHARACTER', payload }
}

export function setSearch(payload) {
  return { type: 'CHARACTER/SEARCH', payload }
}

export function setLoading(payload) {
  return { type: 'CHARACTER/LOADING', payload }
}


export function fetchCharacters() {
  return async dispatch => {
    dispatch(setLoading(true))
    fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(data => dispatch(setCharacters(data.results)))
    .catch(err => {
      console.log(err)
    })
    .finally(_ => dispatch(setLoading(false)))
  }
}

export function fetchCharacter(id) {
  return dispatch => {
    dispatch(setLoading(true))
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(data => {
        dispatch(setCharacter(data))
      })
      .catch(err => console.log(err))
      .finally(_ => {
        setTimeout(() => {
          dispatch(setLoading(false))
        }, 500)
      })
  }
}

export function searchProduct(term) {
  return dispatch => {
    dispatch(setLoading(true))
    fetch(`https://rickandmortyapi.com/api/character/?name=${term}`)
      .then(res => res.json())
      .then(data => dispatch(setCharacters(data.results)))
      .catch(err => console.log(err))
      .finally(_ => {
        setTimeout(() => {
          dispatch(setLoading(false))
        }, 500)
      })
  }
}