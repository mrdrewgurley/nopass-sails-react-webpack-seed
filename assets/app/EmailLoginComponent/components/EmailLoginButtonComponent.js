import axios from 'axios'
import classNames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class EmailLoginButtonComponent extends PureComponent {

  requestAccess = () => {
    var that = this
    axios
      .put('/auth/handshake', {
        email: document.getElementById('form-input-email').value
      })
      .then(res => {
        if (res.status == 204) {
          that.props.Actions.handshakeSuccess()
          window.uikit.notification({
            message: "<span uk-icon='icon: info'></span><span class='text'>Success, please check your email inbox</span>",
            status: 'success'
          })
          document.getElementById('EmailLoginInput').remove();
        }
      })
      .catch(function(err) {
        if (err.response.status == 400) {
          that.props.Actions.handshakeFailure()
          err.response.data.forEach(message => {
            window.uikit.notification({
              message: "<span uk-icon='icon: warning'></span><span class='text'>" + message + "</span>",
              status: 'danger'
            })
          })
        }
      })
  }

  handleClick = (e) => {
    e.preventDefault()
    this.props.Actions.attemptHandshake()
    this.requestAccess()
  }

  render() {
    return (
      <div className="uk-button-group">
        <button
          className={classNames('uk-button', this.props.EmailLoginButtonReducer.class)}
          onClick={(e) => this.handleClick(e)}
          disabled={!this.props.EmailLoginButtonReducer.state}
        >
          {this.props.EmailLoginButtonReducer.label}
        </button>
      </div>
    )
  }

}

EmailLoginButtonComponent.propTypes = {

  Actions: PropTypes.object.isRequired,
  EmailLoginButtonReducer: PropTypes.object.isRequired

}
