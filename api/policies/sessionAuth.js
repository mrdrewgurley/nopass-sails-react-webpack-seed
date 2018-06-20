/**
 * sessionAuth
 * @module Policy
 * @desc Validates session authentication.
 * @docs http://sailsjs.org/#!/documentation/concepts/Policies
 */
module.exports = function (req, res, next) {
  if (req.session.authenticated) {
    return next()
  }

  return res.redirect('/login')
}
