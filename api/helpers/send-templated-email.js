/**
 * Helpers.send-templated-email
 * @module Helpers
 * @desc A helper to send templated email.
 * @docs https://sailsjs.com/documentation/concepts/helpers
 */

module.exports = {
  description: `Helper to send templated emails via Mailgun -- will print email directly to
  console if recipient is omitted.`,

  inputs: {
    template: {
      description: `Provide path to an EJS template relative to < views/emails/ >`,
      example: 'email-token-access',
      type: 'string',
      required: true
    },

    templateData: {
      description: 'A dictionary of data which will be accessible in the EJS template.',
      defaultsTo: {},
      type: {}
    },

    to: {
      description: 'The email address of the primary recipient.',
      defaultsTo: 'user@example.com',
      type: 'string'
    },

    subject: {
      description: 'The subject of the email.',
      defaultsTo: 'NoPass Account Access',
      type: 'string'
    },

    layout: {
      description: `Set to FALSE to disable layouts altogether provide path to an EJS template
      relative to < views/layouts/ >`,
      defaultsTo: 'layout-email',
      custom: (layout) => layout === false || _.isString(layout)
    }
  },

  exits: {
    success: {
      description: 'A dictionary of information about what went down.',
      outputType: {
        loggedInsteadOfSending: 'boolean'
      }
    }
  },

  fn: async function (inputs, exits) {
    var path = require('path')
    var url = require('url')
    var util = require('util')

    // Determine appropriate email layout and template to use.
    var emailTemplatePath = path.join('emails/', inputs.template), layout
    layout = inputs.layout ?
      path.relative(path.dirname(emailTemplatePath), path.resolve('layouts/', inputs.layout)) : false

    /**
     * Compile HTML template.
     *  Note that we set the layout, provide access to core `url` package (for
     *  building links and image srcs, etc.), and also provide access to core
     *  `util` package (for dumping debug data in internal emails).
     */
    var htmlEmailContents = await sails.renderView(
      emailTemplatePath,
      Object.assign({ layout, url, util }, inputs.templateData)
    )
      .intercept((err) => {
        err.message =
          'Could not compile view template.\n' +
          'Details:\n' +
          err.message
        return err
      })

    // build the draft log for testing/development
    var log = `
-=-=-=-=-=-=-=-=-=-=-=-=-= Email log =-=-=-=-=-=-=-=-=-=-=-=-=-
To: ${inputs.to }
Subject: ${inputs.subject }

Body:
${htmlEmailContents }
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`

    // If the recipient is empty or it contains @example.com,
    // log the email contents directly to the console
    if (Boolean(inputs.to.match(/@example\.com$/i))) {
      sails.log(log)
    } else {
      // Otherwise, attempt to send via Mailgun
      if (!sails.config.custom.mailgunSecret || !sails.config.custom.mailgunDomain) {
        throw new Error(`Cannot deliver email to "${ inputs.to }" because:` +
          (() => {
            let problems = []
            if (!sails.config.custom.mailgunSecret) {
              problems.push(' • Mailgun secret is missing from this app\'s configuration (`sails.config.custom.mailgunSecret`)')
            }
            if (!sails.config.custom.mailgunDomain) {
              problems.push(' • Mailgun domain is missing from this app\'s configuration (`sails.config.custom.mailgunDomain`)')
            }
            return problems.join('\n')
          })()
        )
      }

      await sails.helpers.mailgun.sendHtmlEmail.with({
        htmlMessage: htmlEmailContents,
        to: inputs.to,
        subject: inputs.subject,
        testMode: false
      })
    }

    return exits.success({
      contents: log
    })
  }
}
