const config = require('../config')
const store = require('../store')

// Same as updateGame
const createExercise = function (data) {
  console.log(data)
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

const updateExercise = function (data, id) {
  console.log(data)
  console.log(id)
  return $.ajax({
    url: config.apiUrl + `/exercises/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
// const updateExercise = function (id, formData) {
//   return $.ajax({
//     url: config.apiUrl + '/exercises/' + formData.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: formData
//   })
// }

module.exports = {
  createExercise,
  getExercises,
  deleteExercise,
  updateExercise
}
