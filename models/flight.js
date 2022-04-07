const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const destinationSchema = new Schema({
    airport: {        
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    }, 
    arrival: {type: Date},
})






const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: {type: Number, min: 10, max:999}, 
    departs: Date,
    destinations:[destinationSchema]
});
module.exports = mongoose.model('Flight', flightSchema);

// Model.create(<object or array of objects>)

