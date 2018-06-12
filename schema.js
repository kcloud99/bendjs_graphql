var fetch = require('node-fetch');
var {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} = require('graphql');

//var x = fetch('https://api.github.com/gists/public').then(response => response.json());

var AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: '...',

  fields: () => ({
    name: {
      type: GraphQLString
    }
  })
})

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({
      author: {
        type: AuthorType,
        args: {
          id: {type: GraphQLInt}
        },
        resolve: (root, args) => fetch(`https://api.github.com/gists/public`).then(response => response.json())
      }
    })
  })
})



// Define schema

Exercise
-- name
-- description
-- video (youtube)
-- mainType = ExerciseType
-- subTypes = [ExerciseType]
-- completed {
  -- date
  -- sets
  --reps
}

Workout = [Exercise]
  => date, name

BMI {
  BMI
  Date
}
Weight {
  Weight
  Date
}

Data from garmin watch

query Day {
  Workout {
    [Exercise]
  }
  Food // from myFitnessPal??
  Weight
  BMI
}