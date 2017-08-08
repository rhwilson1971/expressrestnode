// server.js

// BASE SETUP
// =============================================================================

var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/hibiscus-test');

// var Prescription = require('./models/prescription.js');


// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8085;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router


console.log(__dirname);
app.use(express.static(__dirname + '/.'));

// middleware for all requests
router.use(function(req, res, next){

	console.log('Something is happening');
	next();
});


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});




// on routes that end in /prescriptions
// ----------------------------------------------------

// more routes for our API will happen here
//router.route('/prescriptions')

//	.post(function(req, res){

//		var script = new Prescription();

//		script.scriptName = req.body.scriptname;
//		script.genericName = req.body.genericname;

//		console.log(req.body.scriptname);
//		console.log(req.body.genericname);


//		script.save(function(err){
//			if(err)
//				res.send(err);

//			res.json({message: 'Script created'});
//		});
//	})

//	.get(function(req, res) {
//		Prescription.find(function(err, scripts) {
//  		if (err)
//    		res.send(err);

//    		res.json(scripts);
//  	});
// 	});


// router.route('/prescription/:prescription_id')

// 	// get the script with that id (accessed at GET http://localhost:8085/api/bears/bear_id)
// 	.get(function(req, res){
// 		Prescription.findById(res.params.bear_id, function(err, script){
// 			if(err)
// 				res.send(err);
// 			res.json(script);
// 		})
// 	})
	
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('API listening on port: ' + port);




