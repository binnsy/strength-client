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
  console.log(data)
  api.createExercise(data)
  ui.clearExercises()
    .then(onGetExercises(event))
    // console.log('hi')
    .catch(ui.failure)
}

const onClearExercises = (event) => {
  event.preventDefault()
  ui.clearExercises()
}

const onUpdateExercise = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(event)

  const id = $(event.target).data('id')
  console.log(id)

  api.updateExercise(data, id)
    .then(() => onGetExercises(event))
    .then(ui.catch)
  // console.log(event)
  // console.log('click')
  // const id = $(event.target).data('id')
  // console.log(id)
  // const formData = getFormFields(event.target)
  // console.log(formData)
  // api.updateExercise(id, formData)

  // .then(ui.updateExerciseSuccess)
  // .then(onGetExercises(event))
  // .catch(ui.failure)
}

// // Get all exercises user logged in has created
const onGetExercises = function (event) {
  event.preventDefault()
  console.log(event)
  console.log('hi')
  ui.clearExercises()
  api.getExercises()
    .then(ui.getExercisesSuccess)
    .catch(ui.failure)
}

const onDeleteExercise = (event) => {
  event.preventDefault()
  // console.log('hi')
  const id = $(event.target).data('id')
  console.log(id)
  // store.id = data.id
  // store.id = event.exercise
  // ui.clearExercises()
  api.deleteExercise(id)
    .then(ui.clearExercises())
    // .then(ui.getExercisesSuccess)
    .then(onGetExercises(event))
    .catch(ui.failure)
  //
  // ui.getExercisesSuccess()
    // refresh the page
    // .then(() => onGetBooks(event))

    // .then(onGetExercises(event))
    // .catch(ui.failure)
}

const addHandlers = function () {
//  $('#create').on('click', onCreateExercise)
  $('#create-exercise').on('submit', onCreateExercise)
  $('#getExercisesButton').on('click', onGetExercises)
  $('#clearExercisesButton').on('click', onClearExercises)
  $('#content').on('click', '.delete', onDeleteExercise)
  $('#content').on('submit', '.update-form', onUpdateExercise)
  // $('#content').on('submit', '.update', onUpdateExercise)
}

module.exports = {
  addHandlers
}
