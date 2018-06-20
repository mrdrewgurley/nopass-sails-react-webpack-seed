/**
 * TokenService
 * @module Services
 * @desc A service to facilitate the creation and management of JSON Web Tokens.
 * @docs https://sailsjs.com/documentation/concepts/services
 * @help https://www.npmjs.com/package/jsonwebtoken
 */

var jwt = require('jsonwebtoken')
var secret = sails.config.custom.jwtSecret

module.exports = {
  /**
   * @module Service
   * @desc Generate a token based on the User model
   * @param user
   */
  generateToken: user =>
    jwt.sign({ user: user }, secret),

  /**
   * @module Service
   * @desc Verify a token
   * @param token
   */
  verifyToken: token =>
    jwt.verify(token, secret),

  /**
   * @module Service
   * @desc URL encode a token to pass as a parameter
   * @param token
   */
  urlEncodeToken: token =>
    encodeURIComponent(token).replace(/\./g, '~'),

  /**
   * @module Service
   * @desc Decode a URL parameter token
   * @param token
   */
  urlDecodeToken: token =>
    decodeURIComponent(token.replace(/\~/g, '.'))
}
