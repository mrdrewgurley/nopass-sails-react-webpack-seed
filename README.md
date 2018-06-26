# nopass-sails-react-webpack-seed

> A Sails 1.0 application with an integrated, scalable and extensible Passwordless Authentication system.

## What is Passwordless Authentication?
Passwordless authentication is a type of authentication where users do not need to login with passwords. This form of authentication makes creation of, storing, securing and remembering passwords obsolete. With this form of authentication, users are presented with a login screen that requests their email address, and then sends them a temporary access token that is delivered via email. This token is convieniently disguised as a button that the user clicks to gain access to the secured area. Authorization is then persisted through the session.

There is no doubt that passwords have become more susceptible to being compromised in recent years. Passwordless authentication aims to eliminate authentication vulnerabilities.

## What tools does this project include?
This project is built in `NodeJS` and utilizes the `SailsJS Framework` -- in conjunction with `Async`, `Lodash`, `EJS` and `JSONWebToken` -- to facilitate backend functionality; a combination of `Mocha`, `Chai`, `Chai-Spies`, `Chai-Jest-Snapshot` and `Supertest` are utilized for integration testing.

The frontend is built with `HTML5`, `UIKit` and `Axios` -- it also utilizes `React`/`Redux` to construct reusable components to augment user interactions, and simplify testing with `Jest`.

`Yarn` manages the project dependencies. `Babel`, `Less` and `Webpack` serve to transpile and bundle frontend assets. `Nodemon` monitors the project for code changes during development.

### Core Dependencies

* [NodeJS](https://nodejs.org/en/): As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications.
* [Yarn](https://yarnpkg.com/lang/en/): Fast, reliable and secure dependency management.

### Backend Dependencies

* [SailsJS](https://sailsjs.com/): Sails is a Realtime MVC framework for Node.js, designed to emulate the familiar MVC pattern of frameworks like Ruby on Rails, but with support for the requirements of modern apps: data-driven APIs with a scalable, service-oriented architecture.
* [Async](https://caolan.github.io/async/): Async is a utility module which provides straight-forward, powerful functions for working with asynchronous JavaScript.
* [Lodash](https://lodash.com/): A modern JavaScript utility library delivering modularity, performance & extras.
* [EJS](http://ejs.co/): EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.
* [JSONWebToken](https://jwt.io/): An open, industry standard RFC 7519 method for representing claims securely between two parties.

### Frontend Dependencies

* [UIkit](https://getuikit.com/): A lightweight and modular front-end frameworkfor developing fast and powerful
web interfaces.
* [Axios](https://github.com/axios/axios): Promise based HTTP client for the browser and node.js.
* [React](https://reactjs.org/): A javascript library for building user interfaces.
* [Redux](https://redux.js.org/): Redux is a predictable state container for JavaScript apps.

### Testing Dependencies

* [Mocha](https://mochajs.org/): Mocha is a feature-rich JavaScript test framework
* [Chai](http://www.chaijs.com/): Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
* [Chai-Spies](https://github.com/chaijs/chai-spies): Spies for Chai Assertion Library.
* [Chai-Jest-Snapshot](https://github.com/suchipi/chai-jest-snapshot): Chai assertion that provides Jest's snapshot testing.
* [Supertest](https://github.com/visionmedia/supertest): Super-agent driven library for testing node.js HTTP servers using a fluent API.
* [Jest](https://facebook.github.io/jest/): Jest parallelizes test runs across workers to maximize performance.

### Build Utilities

* [Babel](https://babeljs.io/): Babel is a JavaScript compiler (transpiler).
* [Less](http://lesscss.org/): It's CSS, with just a little more.
* [Webpack](https://webpack.js.org/): At its core, webpack is a static module bundler for modern JavaScript applications.
* [Nodemon](https://nodemon.io): Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

> Note that the following instructions are for deployment on OS X.  Deployment on other platforms may have some differences.

### Prerequisites

* [Homebrew](https://brew.sh)
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

* [NodeJS](https://nodejs.org)
```
brew install node
```

* [Yarn](https://yarnpkg.com)
```
brew install yarn
```

### Installing

* Clone the Repository
```
git clone https://github.com/mrdrewgurley/nopass-sails-react-webpack-seed.git
```

* Change to project directory
```
cd nopass-sails-react-webpack-seed
```

* Build application dependencies:
```
yarn install
```

### Running

* Watches the project with continuous rebuild.  View at http://localhost:1337
```
yarn start
```

* Single launch of application without project monitoring or continuous rebuild.
```
sails lift
```

## Running the tests

### Backend Integration Tests

```
yarn test-backend
```

### Frontend Component Tests

```
yarn test-frontend
```

## Deployment

```
yarn prod
```

> Tips for deploying a Sails Application in a Production Environment: [Deployment Tips](http://sailsjs.com/documentation/concepts/deployment)

## Areas of interest

You&rsquo;ll want to pay attention to the following files when tweaking this app to fit your specific needs:

* `config/webpack.js`:  this contains the main Webpack configuration, which is used by a hook in the app to initialize a new Webpack 2.x compiler.  See the [full Webpack configuration docs](https://webpack.js.org/configuration/) for info about all of the available options.
* `config/env/production.js`:  the default Sails.js production config file has been updated to include a section that adds the `UglifyJsPlugin` plugin to the Webpack config when in production mode.
* `api/hooks/webpack`:  a simple [hook](http://sailsjs.com/documentation/concepts/extending-sails/hooks) that starts a Webpack compiler when your Sails app lifts.  In most cases you shouldn&rsquo;t have to modify the hook at all.
* `assets/js/sockets.js`:  rather than including the [Sails socket client](http://sailsjs.com/documentation/reference/web-sockets/socket-client) using a `<script>` tag, we want to do it the Webpack way by `require()`ing the file in one of our scripts.  Webpack&rsquo;s dependency cacheing causes some problems with the socket client&rsquo;s initialization, so we wrap the initialization step in the `sockets.js` file.  Any script that needs to use the socket client can do so by adding `var io = require('/relative/path/to/sockets.js')` at the top.
   > Note that this means that `io.socket` will _not_ be available globally -- for example, if you open up a JavaScript console in your browser, you won&rsquo;t be able to do `io.socket.get()` to try out a request.  To make the socket client available globally, you&rsquo;ll have to manually set `window.io` in a JavaScript file.
* `views/layout.ejs`:  has been adjusted to load the bundled scripts and stylesheets created by Webpack, rather than the individual .js and .css files that usually get copied directly from `assets` into `.tmp/public`.
* `views/emails/`: this the location where you will store all of your email templates.  Note the layout for the email templates is located at `views/layouts/layout-email.ejs`.
* All dependency configuration exists in individual config files at the root level of the project.
* Security Policies can be adjusted in the `config/policies.js` file.
* During development or testing, any emails sent using the `api/helpers/send-templated-email.js` methods, can instead be logged to the console by omitting a recipient.
* Production emails are designed to utilize Mailgun ( as is the preferred standard of the Sails Team ).  This can be overriden by refactoring the code in `api/helpers/send-templated-email.js`.
* Take a look at the `config/custom.js` for custom application level settings.
  > BE SURE TO CHANGE THE `jwtSecret` setting in `config/custom.js`.

## What happens when you lift

When you lift this seed app, the app-level `webpack` hook starts a new Webpack compiler which then:

1. Cleans out the `.tmp/public` folder (using the `CleanWebpackPlugin` plugin)
2. Copies over any files from `assets/images` and `assets/fonts` into `.tmp/public` (using the `CopyWebpackPlugin` plugin)
3. Loads the `assets/js/homepage.js` file
4. Imports the `assets/styles/homepage.less` and `assets/dependencies/sockets.js` files via the `require()` statements in the `homepage.js` file.
5. Recursively processes any requires in those files, and combines all of the JavaScript into one file (.tmp/public/js/homepage.bundle.js) and all of the CSS into another (.tmp/public/styles/homepage.bundle.css), using the `ExtractTextPlugin` plugin.  _In the production environment, the JavaScript is minified using the `UglifyJsPlugin` plugin.
6. Starts watching the entire project for any changes.

## Where to go from here

The sky&rsquo;s the limit!  If this starter configuration works for you, and you&rsquo; building a multi-page app, you'll probably want to add items in the `sails.config.webpack.entry` dictionary for each page you build.  If you maintain the projects `React Component` structure, you will need to add each top-level component to this registry as well.  You may also want to adjust the `CopyWebpackPlugin` to add or remove asset folders to copy wholesale into `.tmp/public`.

### Links

+ [Webpack main site](http://webpack.js.org)
+ [Sails framework documentation](http://sailsjs.com/documentation)
+ [Deployment tips](http://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](http://sailsjs.com/support)
+ [Sails Flagship](https://flagship.sailsjs.com)

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/mrdrewgurley/nopass-sails-react-webpack-seed/tags).


## Author

Drew has over fifteen years of experience in the Software Engineering field, with more than six years of Data Management experience -- acquisition, transformation, analytics and distribution.

He undertakes many roles including solutions architecture, technological strategy, project management, database administration, hands-on development and senior-level management.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details
