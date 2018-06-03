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