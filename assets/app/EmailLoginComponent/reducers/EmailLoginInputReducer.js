import { handleActions } from 'redux-actions'
import * as types from '../constants/EmailLoginActionTypes'

const DEFAULT = {
  class: 'enabled',
  state: true
}

const actionHandlers = {
  [types.ATTEMPT_HANDSHAKE]: state => ({
    ...state,
    class: 'disabled',
    state: false
  }),
  [types.HANDSHAKE_FAILURE]: state => ({
    ...state,
    class: 'uk-form-danger',
    state: true
  }),
  [types.HANDSHAKE_SUCCESS]: state => ({
    ...state,
    class: 'uk-form-success',
    state: false
  })
}

export default handleActions(actionHandlers, DEFAULT)
