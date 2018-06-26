import { createStore } from 'redux'
import reducers from '../reducers/EmailLoginReducers'

/**
 * Email Login Store
 * @desc returns the components data store
 * @param {object} intialState - defines the intial state of the store
 * @return {object}
 */
export default initialState =>
  createStore(reducers, initialState)
