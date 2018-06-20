import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Login from './containers/EmailLoginContainer'
import Store from './stores/EmailLoginStore'

render(
  <Provider store={Store()}>
    <Login />
  </Provider>,
  document.getElementById('EmailLoginComponent')
)
