'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Congrats! You have signed up successfully. Now sign in to get started!')
  console.log('sign up successful')
  // $('form').trigger('reset')
  // $('#sign-up').hide()
  // $('.box').show()
  // $('#sign-out').show()
  // $('#reset').hide()
  // $('#getGames').show()
  // $('#sign-in').show()
}

const signUpFailure = function (data) {
  $('#message').text('We had difficulty signing you up! Try again.')
  // $('form').trigger('reset')
  // $('#message').css('color', 'red')
}

const signInSuccess = function (data) {
  $('#message').text('Congrats you have successfully signed in! Click Create New Game to get started!')
  // $('#message').css('color', 'green')
  store.user = data.user
  console.log('sign in successful')
  // $('form').trigger('reset')
  // $('#sign-up').hide()
  // $('.box').show()
  // $('#sign-out').show()
  // $('#reset').show()
  // $('#getGames').show()
  // $('#change-password').show()
  // $('#sign-in').hide()
}

const signInFailure = function (data) {
  $('#message').text('Sorry something went wrong! Please try again.')
  // $('form').trigger('reset')
  // // $('#message').css('color', 'red')
  // $('#sign-up').show()
}

const changePasswordSuccess = function (data) {
  $('#message').text('You have successfully changed your password!')
  // $('form').trigger('reset')
}

const changePasswordFailure = function (data) {
  $('#message').text('Change password failure. Please try again.')
  // $('#message').css('color', 'red')
  // $('form').trigger('reset')
}

const signOutSuccess = function (data) {
  $('#message').text('Sign out successful!')
  // $('form').trigger('reset')
  // $('#sign-in').show()
  // $('#sign-up').show()
  // $('#change-password').hide()
  // $('.row').hide()
  // $('#reset').hide()
  // $('#sign-out').hide()
  // $('#getGames').hide()
  // $('#message2').hide()

  store.user = null
}

const signOutFailure = function (data) {
  $('#message').text('How about we try signing out again. Looks like something went wrong.')
  // $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
