/**
 * DashboardController.welcome
 * @module Actions
 * @desc An action for displaying the Dashboard Welcome page.
 * @docs https://sailsjs.com/documentation/concepts/actions-and-controllers
 */

module.exports = {
  exits: {
    success: {
      description: 'Display the welcome page for authenticated users.',
      responseType: 'view',
      viewTemplatePath: 'pages/dashboard/welcome',
    }
  },

  fn: async function (inputs, exits) {
    return exits.success()
  },
};
