/**
 * 400 Bad Request
 * @module Responses
 * @desc
 * Invoked when a validation error occurs from submitted data.
 *  • status code: 400
 *  • json: body containing json with validation errors
 *
 * Usage:
 * return res.badRequest(errors)
 *
 * @param {Object} errors
 *
 * @docs https://sailsjs.com/documentation/concepts/extending-sails/custom-responses
 */

module.exports = function badRequest (errors) {
  sails.log.info('Ran custom response: res.badRequest()')

  var req = this.req
  var res = this.res

  return res.status(400).send(JSON.stringify(errors.problems))
}
