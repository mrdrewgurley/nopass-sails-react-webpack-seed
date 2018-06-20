/**
 * 500 Server Error
 * @module Responses
 * @desc
 * Invoked when an internal error occurs.
 *  • status code: 500
 *  • view: view with no error details
 *
 * Usage:
 * return res.serverError(errors)
 *
 * @param {Object} errors
 *
 * @docs https://sailsjs.com/documentation/concepts/extending-sails/custom-responses

 *
 * NOTE:
 * If something throws in a policy or controller, or an internal
 * error is encountered, Sails will call `res.serverError()`
 * automatically.
 */

module.exports = function serverError (errors) {
  sails.log.info('Ran custom response: res.serverError()')

  var req = this.req
  var res = this.res

  res.status(500)
  sails.log.error('Errors:', errors)

  return res.view(500)
}
