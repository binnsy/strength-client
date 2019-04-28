
const store = require('../store')
const getExercisesTemplate = require('../templates/get-exercises.handlebars')
//
const createExerciseSuccess = function (data) {
  $('#message').text('New exercise has been created!')
  console.log(data)
  store.exercise = data.exercise
}

const updateExercise = (formData) => {
  console.log('trying to update')
  store.id = formData.id
  console.log(store.id)
  console.log(formData)
  // store.gameBoard = data.game
  console.log(formData)
  const getExercisesHtml = getExercisesTemplate({ exercises: formData.exercises })
  $('.content').append(getExercisesHtml)
  // console.log(exercise)
}
const getExercisesSuccess = (data) => {
  console.log(data)
// $('#message').text('Exercises!')
  const getExercisesHtml = getExercisesTemplate({ exercises: data.exercises })
  $('.content').append(getExercisesHtml)
}

const clearExercises = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
  // $('#message').text('error')
}

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
  // createExerciseFailure,
  getExercisesSuccess,
  clearExercises,
  failure,
  updateExercise
}
