import { createStore } from 'redux'
import reducers from '../reducers/EmailLoginReducers'

/**
 * @desc returns the data store
 * @param {object} intialState - override intial state of the store
 * @return {object}
 */
export default initialState =>
  createStore(reducers, initialState)
