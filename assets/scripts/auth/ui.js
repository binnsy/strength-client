'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#signUpModal').modal('hide')
  $('#message2').show()
  setTimeout(function () {
    $('#message2').fadeOut('slow')
  }, 2000)
  $('#message2').text('Congrats! You have signed up successfully. Now sign in to get started!')

  // console.log('sign up successful')
  $('form').trigger('reset')
  // $('.sign-up').hide()

  $('#sign-out').hide()
  $('#reset').hide()
  $('#getGames').show()
  $('#sign-in').show()
  // $('#message2').show()
}

const signUpFailure = function (data) {
  // $('.toast').toast('show')

  // $('#message2').show()
  // setTimeout(function () {
  //   $('#message2').fadeOut('slow')
  // }, 4000)
  $('#signUpModalMessage').show()
  setTimeout(function () {
    $('#signUpModalMessage').fadeOut('slow')
  }, 6000)
  $('#signUpModalMessage').text('Sorry. We had difficulty signing you up. It is possible that user name is taken or your passwords did not match. ')
  $('#signUpModalMessage').css('color', 'red')
  // $('#message2').text('We had difficulty signing you up! Try again.')
  $('form').trigger('reset')

  // $('#message').css('color', 'red')
}

const signInSuccess = function (data) {
  $('#signInModal').modal('hide')
  $('#message2').show()
  $('#message').show()
  $('#content.content').show()
  $('.generateExercisesDisplay').hide()
  setTimeout(function () {
    $('#message').fadeOut('slow')
  }, 2000)
  $('#message').text('Congrats you have successfully signed in!')
  $('#message2').text('Create an exercise or view your exercise log!')
  $('#timer').hide()
  // setTimeout(function () {
  //   $('#message').fadeOut('slow')
  // }, 2000)
  store.user = data.user
  // console.log('sign in successful')
  $('form').trigger('reset')
  $('.sign-up').hide()
  $('.nav-buttons').show()
  // $('#reset').hide()
  // $('.row').hide()
  // $('.box').show()
  $('.sign-out').show()
  // $('#reset').show()
  $('#getExercises').show()
  $('.change-password').show()
  $('.sign-in').hide()
}

const signInFailure = function (data) {
  // $('.toast').toast('show')
  $('#signInModalMessage').show()
  setTimeout(function () {
    $('#signInModalMessage').fadeOut('slow')
  }, 4000)
  $('#signInModalMessage').text('Sorry. We had difficulty signing you in. Please try again.')
  $('#signInModalMessage').css('color', 'red')
  // $('#message2').show()
  // setTimeout(function () {
  //   $('#message2').fadeOut('slow')
  // }, 4000)
  // $('#message2').text('Sorry something went wrong! Please try again.')
  $('form').trigger('reset')
  // // $('#message').css('color', 'red')
  $('.sign-up').show()
}

const changePasswordSuccess = function (data) {
  $('#changePasswordModal').modal('hide')
  $('#message2').show()
  setTimeout(function () {
    $('#message2').fadeOut('slow')
  }, 4000)
  $('#message2').text('You have successfully changed your password!')
  $('form').trigger('reset')
}

const changePasswordFailure = function (data) {
  // $('.toast').toast('show')
  $('#changePasswordModalMessage').show()
  setTimeout(function () {
    $('#changePasswordModalMessage').fadeOut('slow')
  }, 4000)
  $('#changePasswordModalMessage').text('Change password failure. Please try again.')
  $('#changePasswordModalMessage').css('color', 'red')
  // $('#message').css('color', 'red')
  $('form').trigger('reset')
}

const signOutSuccess = function (data) {
  $('form').trigger('reset')
  $('#message2').show()
  setTimeout(function () {
    $('#message2').fadeOut('slow')
  }, 4000)
  $('#message2').text('Sign out successful!')
  $('.content').empty()
  $('.sign-in').show()
  $('.sign-up').show()
  $('.change-password').hide()
  // $('#message2').hide()
  // $('#content.content').hide()
  $('.nav-buttons').hide()
  $('.sign-out').hide()
  $('#getExercises').hide()
  // $('#message2').hide()

  store.user = null
}

const signOutFailure = function (data) {
  $('.toast').toast('show')
  $('#message2').show()
  setTimeout(function () {
    $('#message2').fadeOut('slow')
  }, 4000)
  $('#message2').text('How about we try signing out again. Looks like something went wrong.')
  $('form').trigger('reset')
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
