import { createAction } from 'redux-actions'
import * as types from '../constants/EmailLoginActionTypes'

export const attemptHandshake = createAction(types.ATTEMPT_HANDSHAKE)
export const handshakeFailure = createAction(types.HANDSHAKE_FAILURE)
export const handshakeSuccess = createAction(types.HANDSHAKE_SUCCESS)
