import { handleActions } from 'redux-actions'
import * as types from '../constants/EmailLoginActionTypes'

const DEFAULT = {
  class: 'enabled',
  label: 'SEND LOGIN EMAIL',
  state: true
}

const actionHandlers = {
  [types.ATTEMPT_HANDSHAKE]: state => ({
    ...state,
    class: 'disabled',
    label: 'VERIFICATION PENDING',
    state: false
  }),
  [types.HANDSHAKE_FAILURE]: state => ({
    ...state,
    class: 'uk-form-danger',
    label: 'SEND LOGIN EMAIL',
    state: true
  }),
  [types.HANDSHAKE_SUCCESS]: state => ({
    ...state,
    class: 'uk-form-success',
    label: 'VERIFICATION SUCCESS',
    state: false
  })
}

export default handleActions(actionHandlers, DEFAULT)
