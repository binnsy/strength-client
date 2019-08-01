
const store = require('../store')
const getExercisesTemplate = require('../templates/get-exercises.handlebars')
const getExercisesFile = require('./generateExercises')
//
const createExerciseSuccess = function (data) {
  $('#message2').show()
  setTimeout(function () {
    $('#message2').fadeOut('slow')
  }, 5000)
  $('#message2').text('Congrats you exercise was logged!')
  // $('#create-exercise').trigger('reset')
  $('form').trigger('reset')
}
// console.log(data)
// store.exercise = data.exercise
const createExerciseFailure = function (data) {
  $('#message2').show()
  setTimeout(function () {
    $('#message2').fadeOut('slow')
  }, 5000)
  $('#message2').text('We had trouble logging your exercise! Make sure Exercise name is filled out.')
}
// remove class from body and remove backdrop class elements
const updateExerciseSuccess = (data) => {
  $('#message2').show()
  setTimeout(function () {
    $('#message2').fadeOut('slow')
  }, 5000)
  $('#message2').text('Your exercise has been updated!')
  // console.log('trying to update')
  // clearExercises()
  // console.log(data)
  // $('.content').empty()
  // const getExercisesHtml = getExercisesTemplate({ exercises: data.exercises })
  // $('.content').append(getExercisesHtml)
}
// const exercises = exercises
// console.log(exercises)
// const generateExercises = (data) => {
//   console.log(data)
//   const generateExercisesHtml = getExercisesFile({ exercises: data.exercises })
//   $('.generateExercisesDisplay').append(generateExercisesHtml)
// }

const getExercisesSuccess = (data) => {
  // console.log(data)

// $('#message').text('Exercises!')
  const getExercisesHtml = getExercisesTemplate({ exercises: data.exercises })
  $('.content').append(getExercisesHtml)
  $('.fade').hide()
}

const clearExercises = () => {
  $('.content').empty()
}

const clearGenerateExercises = () => {
  $('.generateExercisesDisplay').empty()
  $('.generateExercisesDisplay').hide()
}

const failure = (error) => {
  console.error(error)
  // $('#message').text('error')
}

// const hideTimer = () => {
//   console.log('hi')
//
//   // clearInterval(timer)
//   $('form').trigger('reset')
//   // $('#displayTimer').text('')
//   // $('#displayTimer').empty()
//   $('#timer').hide()
// }

// our songs data
// const data = { songs: [...] }
// // our songs-page template
// const songsPageTemplate = require('../templates/songs-page.handlebars')
// // give our template the data
// const songsPageHtml = songsPageTemplate({ songs: data.songs })
// // inject our compiled HTML into our webpage
// $('.content').append(songsPageHtml)

module.exports = {
  createExerciseSuccess,
  createExerciseFailure,
  getExercisesSuccess,
  clearExercises,
  failure,
  updateExerciseSuccess,
  clearGenerateExercises
  // hideTimer
}
