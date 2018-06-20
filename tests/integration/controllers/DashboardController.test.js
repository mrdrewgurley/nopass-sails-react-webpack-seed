// tests/integration/controllers/DashboardController.test.js

describe('DashboardController', () => {
  /**
   * @desc authenticates a request before sending the next request
   * @param done - callback
   */
  var authenticatedRequest = done => {
    let TS = TokenService
    let token = TS.urlEncodeToken(TS.generateToken({ email: 'user@example.com' }))

    agent
      .get("/login/" + token)
      .end(function (err, res) {
        done(agent)
      })
  }

  /**
   * DashboardController#welcome
   * @desc Tests for the #welcome action.
   */
  describe('#welcome', function () {
    describe('@get: without auth token', function () {
      it('should redirect to login page', function (done) {
        app
          .get('/dashboard')
          .expect(302)
          .expect('location', '/login', done)
      })
    })

    describe('@get: with auth token', function () {
      it('should return a 200 OK response with dashboard/welcome view', function (done) {
        authenticatedRequest(function (request) {
          request
            .get('/dashboard')
            .expect(200)
            .end(function (err, res) {
              should.not.exist(err)
              res.res.text.should.contain("<!-- Dashboard/welcome page -->")
              return done()
            })
        })
      })
    })
  })
})
