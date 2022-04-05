const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {        
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    }, 
    arrival: Date
})
const flightSchema = new Schema({
    Airline: String,
    Airport: String,
    FlightNo: {type: Number, min: 10, max:999}, 
    Departs: Date,
    destination:[destinationSchema]
});
module.exports = mongoose.model('Flight', flightSchema);

// Model.create(<object or array of objects>)