const sails = require('sails')
const request = require('supertest')
const chai = require('chai')
const spies = require('chai-spies')
const snapshot = require('chai-jest-snapshot')

chai.use(spies)
chai.use(snapshot)

// Before running any tests...
before(function (done) {
  // reset snapshot registry
  snapshot.resetSnapshotRegistry()

  // Increase the Mocha timeout so that Sails has enough time to lift.
  this.timeout(60 * 60 * 24);

  sails.lift({
    // Your sails app's configuration files will be loaded automatically,
    // but you can also specify any other special overrides here for testing purposes.

    // For example, we might want to skip the Grunt hook,
    // and disable all logs except errors and warnings:
    hooks: { grunt: false },
    log: { level: 'warn' },

  }, function (err) {
    if (err) { return done(err) }

    global.app = request(sails.hooks.http.app)
    global.agent = request.agent(sails.hooks.http.app)
    global.chai = chai
    global.should = chai.should()

    // here you can load fixtures, etc.
    // (for example, you might want to create some records in the database)

    return done()
  });
});

beforeEach(function () {
  snapshot.configureUsingMochaContext(this);
});

// After all tests have finished...
after(function (done) {

  // here you can clear fixtures, etc.
  // (e.g. you might want to destroy the records you created above)

  sails.lower(done)

});
