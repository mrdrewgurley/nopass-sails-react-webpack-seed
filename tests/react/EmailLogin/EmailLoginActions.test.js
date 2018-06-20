import * as Actions from '../../../assets/app/EmailLoginComponent/actions/EmailLoginActions'
import * as Types from '../../../assets/app/EmailLoginComponent/constants/EmailLoginActionTypes'

/**
 * React.EmailLoginActions
 * @desc Tests for the Email Login Actions
 */
describe('EmailLoginActionTypes', () => {
  it('should create an action to attempt handshake', () => {
    const expectedAction = {
      type: Types.ATTEMPT_HANDSHAKE
    }
    expect(Actions.attemptHandshake()).toEqual(expectedAction)
  })
  it('should create an action to handle handshake failure', () => {
    const expectedAction = {
      type: Types.HANDSHAKE_FAILURE
    }
    expect(Actions.handshakeFailure()).toEqual(expectedAction)
  })
  it('should create an action to handle handshake success', () => {
    const expectedAction = {
      type: Types.HANDSHAKE_SUCCESS
    }
    expect(Actions.handshakeSuccess()).toEqual(expectedAction)
  })
})
