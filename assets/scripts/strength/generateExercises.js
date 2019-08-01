let exercises = [
  '10 burpees, 10 pushups, 25 bicycle crunches',
  '10 tri dips, 20 split squat jumps, 25 dead bugs',
  '20 sumo squats, 50 reverse crunches, 10 bent over rows',
  '20 jump squats, 15 diamond pushups, 1 minute plank',
  '30 second left side plank, 30 second right side plank, 10 bosu ball leg curls, 20 burpees',
  '45 second hold wall squat, 20 slow calf raises, 20 dumbbell rows',
  '15 standing overhead dumbbell presses, single leg dead lift (12 each side), 50 situps',
  '20 glute bridges, 25 mountain climbers, 24 total walking lunges',
  '60 russian twists, 10 rotational pushups, 10 deadlifts'
]

function generateExercises () {
  const random = (Math.random() * exercises.length) | 0
  console.log(random)
  $('.generateExercisesDisplay').show()
  document.getElementById('generateExercisesDisplay').innerHTML = exercises[random]

  // $('.generateExercisesDisplay').append(exercises)
  // $('.generateExercisesDisplay').text(exercises[randomNum])
}
