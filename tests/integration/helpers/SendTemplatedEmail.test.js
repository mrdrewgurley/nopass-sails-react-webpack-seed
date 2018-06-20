sendEmail = async () => {
  return await sails.helpers.sendTemplatedEmail.with({
    template: 'email-token-access',
    templateData: { token: 12345 }
  })
}

describe('SendTemplatedEmailHelper', () => {
  /**
   * SessionAuth#default
   * @desc Tests for the #default method.
   */
  describe('#default', () => {
    it('should match output snapshot', () => {
      sendEmail()
        .then(response => {
          response.contents.should.matchSnapshot()
        }).catch()
    })
  })
})
