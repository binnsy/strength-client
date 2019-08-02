'use strict'

const getFormFields =
require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')
// const exercises = require('./generateExercises.js')

const onCreateExercise = function (event) {
  event.preventDefault()

  // console.log(event)
  const data = getFormFields(event.target)
  // console.log(data)

  // console.log(data)
  // if data.weight == String
  api.createExercise(data)
  // .then(ui.clearExercises(event))
    .then(function () { onGetExercises(event) })
    // $('form').trigger('reset')

  //  .then(ui.createExerciseSuccess)
    // .then(onGetExercises())
    // console.log('hi')
    .then(ui.createExerciseSuccess)
    .catch(ui.createExerciseFailure)
}

const onClearExercises = (event) => {
  event.preventDefault()
  ui.clearExercises()
}

const onClearGenerateExercises = (event) => {
  event.preventDefault()
  ui.clearGenerateExercises()
}

const onUpdateExercise = function (event) {
  event.preventDefault()
  $('.modal-open').removeClass()
  $('.fade').hide()
  const data = getFormFields(event.target)
  // console.log(event)
  const id = $(event.target).data('id')
  // console.log(id)

  api.updateExercise(data, id)
    .then(function () { onGetExercises(event) })
    .then(ui.updateExerciseSuccess)
    .catch(ui.updateExerciseFailure)
    // .then(onClearExercises(event))
    // .then(onGetExercises(event))
  // ui.clearExercises()
  // .then(() => onGetExercises(event))
  // .then(ui.catch)
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
  ui.clearExercises()
  api.getExercises()
    .then(ui.getExercisesSuccess)
    .catch(ui.failure)
}

const onDeleteExercise = (event) => {
  event.preventDefault()
  $('#message2').show()
  $('#message2').text('Your exercise was deleted!')
  setTimeout(function () {
    $('#message2').fadeOut('slow')
  }, 4000)
  // $('#message2').trigger('reset')
  // console.log('hi')
  const id = $(event.target).data('id')
  // console.log(id)
  // store.id = data.id
  // store.id = event.exercise
  // ui.clearExercises()
  api.deleteExercise(id)
    .then(function () { onGetExercises(event) })
    // .then(ui.clearExercises())
    // // .then(ui.getExercisesSuccess)
    // .then(onGetExercises)
    .catch(ui.failure)
  //
  // ui.getExercisesSuccess()
    // refresh the page
    // .then(() => onGetBooks(event))

    // .then(onGetExercises(event))
    // .catch(ui.failure)
}

const onSetTimer = (event) => {
  event.preventDefault()
  $('#timer').show()
}
function makeMeTwoDigits (timerSeconds) {
  return (timerSeconds < 10 ? '0' : '') + timerSeconds
}

let timer
const userTimer = function (event) {
  event.preventDefault()
  // this.reset()
  // $('#timer-form').reset()
  const data = getFormFields(event.target)
  console.log(data)
  console.log('=========')

  if (timer) {
    clearInterval(timer)
  }
  let timerSeconds = parseFloat(data.timerSeconds) + 1

  timer = setInterval(function () {
    // console.log(timerSeconds)
    // console.log(data)
    if (timerSeconds > 0) {
      timerSeconds--
      $('#displayTimer').text(':' + (makeMeTwoDigits(timerSeconds)) + ' seconds remaining')
    } else {
      clearInterval(timer)
      $('#displayTimer').text('Next Exercise!')
    }
  }, 1000)
}

const onClearTimer = (event) => {
  $('#displayTimer').text('')
  $('.userTimer').empty()
  clearInterval(timer)
}

const onHideTimer = (event) => {
  event.preventDefault()
  clearInterval(timer)
  $('form').trigger('reset')
  $('#displayTimer').text('')
  $('#displayTimer').empty()
  $('#timer').hide()
}

// clearInterval(timer)
// const timerSeconds = 0
// clearInterval(userTimer)

// $('#displayTimer').text(': 00')
// return timer
// $('form').reset()
// return timer
// clearInterval(timer)
// }

// const onStopTimer = () => {
//   clearInterval(timer)
// }
// $(document).ready(function() {
// let count = parseInt($('#num').html)
//
// const onMinusClock = (event) => {
//   if (count > 5) {
//     count -= 5
//     $('#num').html(count)
//     console.log(count)
//   }
// }
//
// const onAddClock = (event) => {
//   count += 5
//   $('#num').html(count)
//   console.log(count)
// }
//
// const onStart = (event) => {
//   let counter = setInterval(timer, 1000)
//
//   function timer () {
//     $('#start, #minusClock, #addClock').hide()
//
//     $('#timeType').html('Time : ')
//     count -= 1
//     if (count === 0) {
//       clearInterval(counter)
//     }
//   }
// }
//
// const onReset = (event) => {
//   console.log('reset')
//   count = 25
//   $('#num').html(count)
//   $('#start, #minusClock, #addClock').show()
//
// }

// const onGenerateExercises = function (event) {
//   event.preventDefault()
//   // function generateExercises () {
//   const random = (Math.random() * exercises.length) | 0
//   console.log(random)
//   const exercise = exercises[random]
//   console.log(exercise)
//   $('.generateExercisesDisplay').show()
//   document.getElementById('generateExercisesDisplay').innerHTML = exercise
//
//   // ui.generateExercises()
// }
// function newExercise() {
// let randomNum = Math.floor(Math.random() * (exercises.length))
// }

const addHandlers = function () {
//  $('#create').on('click', onCreateExercise)
  $('#create-exercise').on('submit', onCreateExercise)
  $('#getExercisesButton').on('click', onGetExercises)
  $('#clearExercisesButton').on('click', onClearExercises)
  $('#hideTimerButton').on('click', onHideTimer)
  $('#clearGenerateExercisesButton').on('click', onClearGenerateExercises)
  $('#content').on('click', '.delete', onDeleteExercise)
  $('#content').on('submit', '.update-form', onUpdateExercise)
  $('#timer-form').on('submit', userTimer)
  $('#setTimer').on('click', onSetTimer)
  $('#clear').on('click', onClearTimer)

  // $('#generateExercisesButton').on('click', onGenerateExercises)

  // $('#stop').on('click', onStopTimer)
  // $('#minusClock').on('click', onMinusClock)
  // $('#addClock').on('click', onAddClock)
  // $('#start').on('click', onStart)
  // $('#reset').on('click', onReset)

  // $('#modal').

  // $('.fade').hide()
  // $('.fade').show('click', '.update-modal')
  // $('.fade').hide('click', '#content')

  // $('#content').on('submit', '.update', onUpdateExercise)
}

module.exports = {
  addHandlers
}
