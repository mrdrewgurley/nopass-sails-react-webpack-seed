/**
 * 200 Ok
 * @module Responses
 * @desc
 * Invoked when request was successful.
 *  • status code: 200
 *
 * Usage:
 * return res.ok()
 *
 * @docs https://sailsjs.com/documentation/concepts/extending-sails/custom-responses
 */

module.exports = function ok () {
  sails.log.info('Ran custom response: res.ok()')
  return this.res.sendStatus(200)
}
