/**
 * AuthController.login
 * @module Actions
 * @desc An action for logging into the system.
 * @docs https://sailsjs.com/documentation/concepts/actions-and-controllers
 */

module.exports = {
  inputs: {
    token: {
      description: 'JSON Web Token used for authorization.',
      type: 'string'
    }
  },

  exits: {
    authorized: {
      description: 'Redirect to the secure resource.',
      responseType: 'redirect',
    },
    unauthorized: {
      description: 'Display the login page for non-authenticated users.',
      responseType: 'view',
      viewTemplatePath: 'pages/auth/login'
    }
  },

  fn: async function (inputs, exits) {
    let req = this.req

    if (inputs.token) {
      let TS = TokenService

      if (TS.verifyToken(TS.urlDecodeToken(inputs.token))) {
        req.session.authenticated = true
        return exits.authorized('/dashboard')
      }
    }

    return exits.unauthorized()
  }
}
