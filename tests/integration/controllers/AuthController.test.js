// tests/integration/controllers/AuthController.test.js

describe('AuthController', () => {
  /**
   * AuthController#request
   * @desc Tests for the #request action.
   */
  describe('#request', function () {
    describe('@get:', function () {
      it('should return a 404 not found response', function (done) {
        app
          .get('/auth/request')
          .expect(404, done)
      })
    })

    describe('@put: with empty email value', function () {
      it('should return a 400 bad request with required response', function (done) {
        app
          .put('/auth/request')
          .expect(400)
          .end(function (err, res) {
            if (err) return done(err)
            res.error.text.should.equal('["\\"email\\" is required, but it was not defined."]')
            done()
          })
      })
    })

    describe('@put: with invalid email value', function () {
      it('should return a 400 bad request with invalid response', function (done) {
        app
          .put('/auth/request')
          .send({ email: 'user' })
          .expect(400)
          .end(function (err, res) {
            if (err) return done(err)
            res.error.text.should.equal('["Invalid \\"email\\":\\n  · Value was not a valid email address."]')
            done()
          })
      })
    })

    describe('@put: with valid email value', function () {
      it('should return a 200 ok response', function (done) {
        app
          .put('/auth/request')
          .send({ email: 'user@example.com' })
          .expect(200, done)
      })
    })
  })

  /**
   * AuthController#login
   * @desc Tests for the #login action.
   */
  describe('#login', function () {
    describe('@get: with no token', function () {
      it('should return a 200 OK response with auth/login view', function (done) {
        app
          .get('/login')
          .expect(200)
          .end(function (err, res) {
            should.not.exist(err)
            res.res.text.should.contain("<!-- Auth/login page -->")
            return done()
          })
      })
    })

    describe('@get: with token', function () {
      it('should return a 302 Found response to /dashboard', function (done) {
        let TS = TokenService
        let token = TS.urlEncodeToken(TS.generateToken({ email: 'user@example.com' }))

        app
          .get('/login/' + token)
          .expect(302)
          .expect('location', '/dashboard', done)
      })
    })
  })

  /**
   * AuthController#logout
   * @desc Tests for the #logout action.
   */
  describe('#logout', function () {
    describe('@get:', function () {
      it('should 302 Found redirect to /', function (done) {
        app
          .get('/logout')
          .expect(302)
          .expect('location', '/', done)
      })
    })
  })
})
