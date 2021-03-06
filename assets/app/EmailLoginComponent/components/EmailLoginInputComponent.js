import classNames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

/**
 * EmailLoginButtonComponent
 * @desc React component for the Email Input
 */
export default class EmailLoginInputComponent extends PureComponent {
  /**
   * render
   * @desc renders the default login input code
   */
  render () {
    return (
      <div className="uk-inline" id="EmailLoginInput">
        <span className="uk-form-icon" uk-icon="icon: user"></span>
        <input
          id="form-input-email"
          className={classNames('uk-input', this.props.EmailLoginInputReducer.class)}
          disabled={!this.props.EmailLoginInputReducer.state}
          required
        />
        <label htmlFor="form-input-email">Email Address</label>
      </div>
    )
  }
}

/**
 * PropTypes Definitions
 */
EmailLoginInputComponent.propTypes = {
  Actions: PropTypes.object.isRequired,
  EmailLoginInputReducer: PropTypes.object.isRequired
}
