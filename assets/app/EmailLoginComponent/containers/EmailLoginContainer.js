import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as EmailLoginActions from '../actions/EmailLoginActions'
import EmailLoginButtonComponent from '../components/EmailLoginButtonComponent'
import EmailLoginInputComponent from '../components/EmailLoginInputComponent'

const EmailLoginContainer = props => (
  <div>
    <EmailLoginInputComponent
      Actions={props.Actions}
      EmailLoginInputReducer={props.EmailLoginInputReducer}
    /><br /><br />
    <EmailLoginButtonComponent
      Actions={props.Actions}
      EmailLoginButtonReducer={props.EmailLoginButtonReducer}
    />
  </div>
)

EmailLoginContainer.propTypes = {
  Actions: PropTypes.object.isRequired,
  EmailLoginButtonReducer: PropTypes.object.isRequired,
  EmailLoginInputReducer: PropTypes.object.isRequired
}

export default connect(
  state => ({ ...state }),
  dispatch => ({ Actions: bindActionCreators(EmailLoginActions, dispatch) })
)(EmailLoginContainer)
