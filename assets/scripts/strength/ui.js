
const store = require('../store')
const getExercisesTemplate = require('../templates/get-exercises.handlebars')
//
const createExerciseSuccess = function (data) {
  $('#message').text('New exercise has been created!')
  console.log(data)
  store.exercise = data.exercise

}
// remove class from body and remove backdrop class elements
const updateExerciseSuccess = (data) => {
  console.log('trying to update')
  clearExercises()
  console.log(data)
  $('.content').empty()
  // const getExercisesHtml = getExercisesTemplate({ exercises: data.exercises })
  // $('.content').append(getExercisesHtml)

}
const getExercisesSuccess = (data) => {
  console.log(data)

// $('#message').text('Exercises!')
  const getExercisesHtml = getExercisesTemplate({ exercises: data.exercises })
  $('.content').append(getExercisesHtml)
  $('.fade').hide()
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
  updateExerciseSuccess
}
