const mongoose = require('mongoose')

const casinoSchema = mongoose.Schema({
casinoName: String,
city: String,
state: String, 
country: String,
casinoType: String,
crapsTable: Boolean,
webURL: String,
tripReport: Boolean,
tableReport: Boolean
})

// make this available in our Node application.Last param is collection name.
module.exports = mongoose.model('Casino' ,casinoSchema)