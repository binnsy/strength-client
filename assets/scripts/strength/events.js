'use strict'

const getFormFields =
require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onCreateExercise = function (event) {
  event.preventDefault()
  console.log(event)
// empty object
  const data = getFormFields(event.target)
  api.createExercise(data)
    .then(ui.createExerciseSuccess)
    .catch(ui.failure)
}

const onClearExercises = (event) => {
  event.preventDefault()
  ui.clearExercises()
}

const onUpdateExercise = function (event) {
  event.preventDefault()
}

// // Get all exercises user logged in has created
const onGetExercises = function (event) {
  event.preventDefault()
  console.log(event)
  console.log('hi')

  api.getExercises()
    .then(ui.getExercisesSuccess)
    .catch(ui.failure)
}

const onDeleteExercise = function (event) {
  // event.preventDefault()
// console.log(delete)
  const id = $(event.target).data('id')
  console.log(id)
  api.deleteExercise(id)
    // refresh the page
    // .then(() => onGetBooks(event))
    .then(ui.onDeleteExercises(event))
    .catch(ui.failure)
}

const addHandlers = function () {
//  $('#create').on('click', onCreateExercise)
  $('#create-exercise').on('submit', onCreateExercise)
  $('#updateExercise').on('submit', onUpdateExercise)
  console.log('click create exercise')
  $('#getExercisesButton').on('click', onGetExercises)
  console.log('click create exercise')
  $('#clearExercisesButton').on('click', onClearExercises)
  $('.delete').on('click', '.delete', onDeleteExercise)
}

module.exports = {
  addHandlers
}
