import { combineReducers } from 'redux'
import EmailLoginButtonReducer from './EmailLoginButtonReducer'
import EmailLoginInputReducer from './EmailLoginButtonReducer'

const reducers = combineReducers({
  EmailLoginButtonReducer,
  EmailLoginInputReducer
})

export default reducers
