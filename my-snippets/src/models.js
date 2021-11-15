const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://itskvant:totallynotmypassword@mysnippets.72kys.mongodb.net/mysnippets?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


module.exports = client;