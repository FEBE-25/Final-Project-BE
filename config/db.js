const mongoose = require('mongoose')
require("dotenv").config()
url_db = "mongodb+srv://gustaf17:dipa18@cluster0.nlelqit.mongodb.net/db_finalProject?retryWrites=true&w=majority"
const db = mongoose.connect(url_db)

module.exports = db