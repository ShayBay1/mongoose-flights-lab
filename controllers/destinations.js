var Flight = require('../models/flight');

module.exports = {
    create,
};


function create(req, res){
    req.body.arrival = new Date(req.body.arrival)
    Flight.findById(req.params.id, function (err, flight){
        console.log(req.body,'hahahahahasdoiigdfogfoiau')
        flight.destinations.push(req.body);
        console.log(flight, "<--------flight object from creat function")
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`);
            
        });
    });
}


