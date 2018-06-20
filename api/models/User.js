/**
 * User
 * @module Models
 * @desc A model for storing user data.
 * @docs https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,

  attributes: {
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true
    },
    name: {
      type: 'string',
      defaultsTo: '',
    },
    surname: {
      type: 'string',
      defaultsTo: '',
    },
    socialProfiles: {
      type: 'json',
      defaultsTo: {},
    }
  },

  customToJSON: function () {
    // Return a shallow copy of this record with the password and ssn removed.
    return _.omit(this, [ 'socialProfiles' ])
  }
}
