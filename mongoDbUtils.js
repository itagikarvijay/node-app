const mongoose = require('mongoose')
require('dotenv').config()
const url = "mongodb://localhost:27017/mbdb";

mongoose.connect(process.env.REACT_APP_MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((MongooseNode) => {
        MongooseNode.connections.forEach(obj => {
            console.log(obj)
        });
    });
const connection = mongoose.connection

connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});

const db = mongoose.connection

module.exports = db