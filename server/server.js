


const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const schema = require('./register-api.js');

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use("/graphql", bodyParser.json(), graphqlExpress(req => {
  // const userForThisRequest = getUserForRequest(req);
  return {
    schema,
    // context: {
    //   userForReq: userForThisRequest,
    // }
  }
}));

// GraphiQL, a visual editor for queries
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));