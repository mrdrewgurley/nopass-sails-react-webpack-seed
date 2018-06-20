/**
 * 404 Not Found
 * @module Responses
 * @desc ::
 * Invoked when request could not be fulfilled because resource does not exist.
 *  • status code: 404
 *  • json: body containing routing response
 *  • view: custom view response
 *
 * Usage:
 * return res.notFound(response)
 *
 * @param {Object} response
 *
 * @docs https://sailsjs.com/documentation/concepts/extending-sails/custom-responses
 */

module.exports = function notFound (response) {
  sails.log.info('Ran custom response: res.notFound()')

  var req = this.req
  var res = this.res

  if (req.wantsJSON) {
    return res.status(404).send(JSON.stringify(response))
  } else {
    return res.view(404)
  }
}
