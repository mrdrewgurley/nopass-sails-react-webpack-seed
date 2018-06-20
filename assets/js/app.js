/**
 * App
 * @desc Initialization of application wide settings and libraries
 */

// Require the styles for the application
require('../styles/app.less')

// Require the sockets.js file
var io = require('../dependencies/sockets.js')

// Import UiKit and Icons
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
UIkit.use(Icons)

// Declare Globals
window.io = io;
window.uikit = UIkit
