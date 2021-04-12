import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import character from './reducer/character'
import favorite from './reducer/favorite'
const rootReducer = combineReducers({
  character,
  favorite 
})

const store = createStore(rootReducer, applyMiddleware(thunk))


export default store