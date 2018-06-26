import { handleActions } from 'redux-actions'
import * as types from '../constants/EmailLoginActionTypes'

/**
 * Email Login Input Reducer
 * @desc Map Reducer for the Email Login Button
 */

const DEFAULT = {
  class: 'enabled',
  state: true
}

const actionHandlers = {
  [ types.ATTEMPT_HANDSHAKE ]: state => ({
    ...state,
    class: 'disabled',
    state: false
  }),
  [ types.HANDSHAKE_FAILURE ]: state => ({
    ...state,
    class: 'uk-form-danger',
    state: true
  }),
  [ types.HANDSHAKE_SUCCESS ]: state => ({
    ...state,
    class: 'uk-form-success',
    state: false
  })
}

/**
 * handleActions
 * @desc binds the action handlers for the reducer
 * @param {object} actionHandlers - mapReduce function
 * @param {object} DEFAULT - default state
 */
export default handleActions(actionHandlers, DEFAULT)
