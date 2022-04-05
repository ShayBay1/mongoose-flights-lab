const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    Airline: String,
    Airport: String,
    FlightNo: {type: Number, min: 10, max:999}, 
    Departs: Date,
});
module.exports = mongoose.model('Flight', flightSchema);

// Model.create(<object or array of objects>)