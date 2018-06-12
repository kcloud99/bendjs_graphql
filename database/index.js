const mongoose = require('mongoose');

// Connect to the local MongoDB database named "testdb"
mongoose.connect('mongodb://localhost/graphqlExample')
// Create a User schema to be stored in the MongoDB database
const UserSchema = new mongoose.Schema({
  _id: String,
  username: String
})
// Turn that schema into a model that we can query
const User = mongoose.model('User', UserSchema)
module.exports = { User }





