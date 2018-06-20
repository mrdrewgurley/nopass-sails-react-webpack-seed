/**
 * AuthController.request
 * @module Actions
 * @desc An action for requesting access to the system.
 * @docs https://sailsjs.com/documentation/concepts/actions-and-controllers
 */

/**
 * sendTokenEmail
 * @desc Sends an email to the user with the access token.
 * @param {string} token JWT Access Token
 * @param {object} user User Data
 * @private
 */
sendTokenEmail = async data => {
  await sails.helpers.sendTemplatedEmail.with({
    to: data.user.email,
    subject: 'NoPass Account Access',
    template: 'email-token-access',
    templateData: {
      token: data.token
    }
  })

  return data
}

module.exports = {
  inputs: {
    email: {
      description: 'The email address of the user to look up.',
      type: 'string',
      required: true,
      isEmail: true,
    }
  },

  exits: {
    success: {
      description: 'Find-Or-Create user record; then email access token.',
      responseType: 'ok',
    },
    serverError: {
      description: 'Oops.',
      responseType: 'serverError',
    }
  },

  fn: async function (inputs, exits) {
    let TS = TokenService

    User
      .findOrCreate({ email: inputs.email }, { email: inputs.email })
      .then((user) => {
        return {
          token: TS.urlEncodeToken(TS.generateToken(user)),
          user: user.toJSON()
        }
      })
      .then(sendTokenEmail)
      .then(exits.success)
      .catch(exits.serverError)
  }
}
