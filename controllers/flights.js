const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index,
  };

function index (req, res){
  Flight.find({}, function(err, flights){
    res.render('flights/index', {flights});
  });
}

function newFlight(req, res){
  res.render('flights/new');

}

function create (req, res){
  //  turn flightnumber string into number
  req.body.flightNo = parseInt(req.body.flightNo);
  req.body.departs = new Date(req.body.departs);
  console.log(req.body);
  const newFlight = new Flight(req.body);
  console.log(newFlight);
  newFlight.save(function(err){
    if(err) return res.render('flights/new');
    console.log(newFlight);
    res.redirect('/flights')
  });
}

//   function create(req, res) {
//     // convert nowShowing's checkbox of nothing or "on" to boolean
//     req.body.nowShowing = !!req.body.nowShowing;
//     // remove whitespace next to commas
//     req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
//     // split if it's not an empty string
//     if (req.body.cast) req.body.cast = req.body.cast.split(',');
//     const movie = new Movie(req.body);
//     movie.save(function(err) {
//       // one way to handle errors
//       if (err) return res.render('movies/new');
//       console.log(movie);
//       // for now, redirect right back to new.ejs
//       res.redirect('/movies/new');
//     });
//   