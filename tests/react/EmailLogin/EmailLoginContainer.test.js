import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import EmailLoginContainer from '../../../assets/app/EmailLoginComponent/containers/EmailLoginContainer'
import Store from '../../../assets/app/EmailLoginComponent/stores/EmailLoginStore'

/**
 * React.EmailLoginContainer
 * @desc Tests for the Email Login Container
 */
describe("Email Login Container", () => {
  it("renders with proper defaults", () => {
    const EmailLogin = renderer
      .create(<Provider store={Store()}>
        <EmailLoginContainer />
      </Provider>)
      .toJSON()

    expect(EmailLogin).toMatchSnapshot()
  })
})
