import { combineReducers } from 'redux'
import EmailLoginButtonReducer from './EmailLoginButtonReducer'
import EmailLoginInputReducer from './EmailLoginButtonReducer'

/**
 * Root Reducer for Email Login Component
 * @desc combines the associated reducers for the component
 */

const reducers = combineReducers({
  EmailLoginButtonReducer,
  EmailLoginInputReducer
})

export default reducers
