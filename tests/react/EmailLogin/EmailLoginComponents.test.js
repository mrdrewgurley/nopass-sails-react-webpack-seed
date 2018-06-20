import React from 'react'
import renderer from 'react-test-renderer'

import EmailLoginButtonComponent from '../../../assets/app/EmailLoginComponent/components/EmailLoginButtonComponent'
import EmailLoginInputComponent from '../../../assets/app/EmailLoginComponent/components/EmailLoginInputComponent'
import * as Actions from '../../../assets/app/EmailLoginComponent/actions/EmailLoginActions'

/**
 * React.EmailLoginComponents
 * @desc Tests for the Email Login Components
 */
describe("Email Login Components", () => {
  describe("Email Login Button Component", () => {
    it("renders with proper defaults", () => {
      const EmailLoginButton = renderer
        .create(<EmailLoginButtonComponent
          Actions={Actions}
          EmailLoginButtonReducer={{}} />)
        .toJSON()

      expect(EmailLoginButton).toMatchSnapshot()
    })
  })

  describe("Email Login Button Component", () => {
    it("renders with proper defaults", () => {
      const EmailLoginInput = renderer
        .create(<EmailLoginInputComponent
          Actions={Actions}
          EmailLoginInputReducer={{}} />)
        .toJSON()

      expect(EmailLoginInput).toMatchSnapshot()
    })
  })
})
