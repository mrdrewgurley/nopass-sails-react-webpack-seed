describe('SessionAuth', () => {
  /**
   * SessionAuth#default
   * @desc Tests for the #default method.
   */
  describe('#default', () => {
    it('should allow access request', () => {
      const req = { session: { authenticated: true } }
      const res = {}
      const next = chai.spy(() => { })

      sails.middleware.policies.sessionauth(req, res, next)
      next.should.have.been.called.once
    })

    it('should deny access request', () => {
      const req = { session: {} }
      const res = { redirect: () => { } }
      const next = chai.spy(() => { })

      sails.middleware.policies.sessionauth(req, res, next)
      next.should.not.have.been.called()
    })
  })
})
