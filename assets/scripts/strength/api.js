const config = require('../config')
const store = require('../store')

// Same as updateGame
const createExercise = function (data) {
  return $.ajax({
    url: config.apiUrl + '/exercises/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: {
    //   'exercise': {
    //     'user_id': store.user,
    //     'date': {
    //       'muscle_group': {
    //         'exercise': {
    //           'description': {
    //             'time': {
    //               'reps': {
    //                 'weight': {
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
  })
}

const getExercises = function () {
  return $.ajax({
    url: config.apiUrl + '/exercises',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteExercise = function (id) {
  return $.ajax({
    url: config.apiUrl + `/exercises/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateExercise = function (id) {
  return $.ajax({
    url: config.apiUrl + `/exercises/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createExercise,
  getExercises,
  deleteExercise,
  updateExercise
}
