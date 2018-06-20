describe('TokenService', () => {
  /**
   * TokenService#generateToken
   * @desc Tests for the #generateToken method.
   */
  describe('#generateToken', () => {
    it('should sign the raw value', () => {
      const raw = '12345'
      const signed = TokenService.generateToken(raw)
      signed.should.match(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/)
    })
  })

  /**
   * TokenService#verifyToken
   * @desc Tests for the #verifyToken method.
   */
  describe('#verifyToken', () => {
    it('should verify the signed value', () => {
      const raw = '12345'
      const signed = TokenService.generateToken(raw)
      const verified = TokenService.verifyToken(signed)
      verified.user.should.equal(raw)
    })

    it('should throw an error if the token is not valid', () => {
      const wrong = '-12345'
      const verify = () => TokenService.verifyToken(wrong)
      verify.should.throw('jwt malformed')
    })
  })

  /**
   * TokenService#urlEncodeToken
   * @desc Tests for the #urlEncodeToken method.
   */
  describe('#urlEncodeToken', () => {
    it('should encode the url for use as a url parameter', () => {
      const raw = '?=/&.'
      const expected = '%3F%3D%2F%26~'
      TokenService.urlEncodeToken(raw).should.equal(expected)
    })
  })

  /**
   * TokenService#urlDecodeToken
   * @desc Tests for the #urlDecodeToken method.
   */
  describe('#urlDecodeToken', () => {
    it('should encode the url for use as a url parameter', () => {
      const raw = '%3F%3D%2F%26~'
      const expected = '?=/&.'
      TokenService.urlDecodeToken(raw).should.equal(expected)
    })
  })
})
