import EmailLoginButtonReducer from '../../../assets/app/EmailLoginComponent/reducers/EmailLoginButtonReducer'
import EmailLoginInputReducer from '../../../assets/app/EmailLoginComponent/reducers/EmailLoginInputReducer'
import * as Types from '../../../assets/app/EmailLoginComponent/constants/EmailLoginActionTypes'

/**
 * React.EmailLoginReducers
 * @desc Tests for the Email Login Reducers
 */
describe('Email Login Component Reducers', () => {
  describe('Email Login Button Reducer', () => {
    it('should return the initial state', () => {
      expect(EmailLoginButtonReducer(undefined, {})).toMatchSnapshot()
    })

    it('should handle attemptHandshake action', () => {
      expect(
        EmailLoginButtonReducer(undefined, {
          type: Types.ATTEMPT_HANDSHAKE
        }))
        .toMatchSnapshot()
    })

    it('should handle handshakeFailure action', () => {
      expect(
        EmailLoginButtonReducer(undefined, {
          type: Types.HANDSHAKE_FAILURE
        }))
        .toMatchSnapshot()
    })

    it('should handle handshakeSuccess action', () => {
      expect(
        EmailLoginButtonReducer(undefined, {
          type: Types.HANDSHAKE_SUCCESS
        }))
        .toMatchSnapshot()
    })
  })

  describe('Email Login Input Reducer', () => {
    it('should return the initial state', () => {
      expect(EmailLoginInputReducer(undefined, {})).toMatchSnapshot()
    })

    it('should handle attemptHandshake action', () => {
      expect(
        EmailLoginInputReducer(undefined, {
          type: Types.ATTEMPT_HANDSHAKE
        }))
        .toMatchSnapshot()
    })

    it('should handle handshakeFailure action', () => {
      expect(
        EmailLoginInputReducer(undefined, {
          type: Types.HANDSHAKE_FAILURE
        }))
        .toMatchSnapshot()
    })

    it('should handle handshakeSuccess action', () => {
      expect(
        EmailLoginInputReducer(undefined, {
          type: Types.HANDSHAKE_SUCCESS
        }))
        .toMatchSnapshot()
    })
  })
})
