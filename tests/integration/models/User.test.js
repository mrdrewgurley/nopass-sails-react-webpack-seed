// tests/integration/models/User.test.js

describe('User', function () {
  /**
   * User#findOrCreate
   * @desc Tests for the #request action.
   */
  describe('#findOrCreate', function () {
    it('should create a new user and then find it', function (done) {
      User
        .findOrCreate({ email: 'user@example.com' }, { email: 'user@example.com' })
        .then(user => {
          user.email.should.equal('user@example.com')

          return done()
        })
        .catch(done)
    })
  })
})
