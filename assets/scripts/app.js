'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const userEvents = require('./auth/events.js')
const events = require('./strength/events.js')

$(() => {
  events.addHandlers()
  console.log('worked')
  userEvents.addHandlers()
})

// $('.box').hide()
// $('#reset').hide()
// $('#getGames').hide()
// $('.row').hide()
// $('#change-password').hide()
// })
