/**
 * AuthController.logout
 * @module Actions
 * @desc An action for logging out of the system.
 * @docs https://sailsjs.com/documentation/concepts/actions-and-controllers
 */

module.exports = {
  exits: {
    success: {
      description: 'Removes session authentication and then redirects to the homepage.',
      responseType: 'redirect',
    },
  },

  fn: async function (inputs, exits) {
    delete this.req.session.authenticated
    return exits.success('/')
  }
};
