import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Login from './containers/EmailLoginContainer'
import Store from './stores/EmailLoginStore'

/**
 * Email Login Component
 * @desc
 * An inteface to request authorization access to the secure areas of the website.
 * Successful requests will result in a JWT Access Token being sent to the requesters email address.
 * Unsuccessful requests will result in an error that will be displayed on the requesting page.
 */

render(
  <Provider store={Store()}>
    <Login />
  </Provider>,
  document.getElementById('EmailLoginComponent')
)
