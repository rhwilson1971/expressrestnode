// server.js

// BASE SETUP
// =============================================================================

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/stopitstartit-db');

var Goal = require('./models/goal.js');

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

// on routes that end in /goals
// ----------------------------------------------------

// more routes for our API will happen here
router.route('/goals')

	.post(function(req, res){
		var goal = new Goal();

		goal.name = req.body.name;
		goal.description = req.body.description;
		goal.frequency = req.body.frequency;
		goal.labels = req.body.labels;
		goal.goal_type = req.body.goal_type;

		console.log(req.body.description);
		console.log(req.body.name);

		Goal.addGoal(goal, function(err, goal){
			if(err)
				res.send(err);

			res.json(goal);
		});
	})

	.get(function(req, res) {
		Goal.getGoals( function(err, goals) {
  			if (err)
    			res.send(err);

    		res.json(goals);
  		});
 	});

router.route('/goal/:_id')
	// get the goal with that id (accessed at GET http://localhost:xxxx/api/goal/goal_id)
 	.get(function(req, res){
 		Goal.getGoalById(res.params._id, function(err, goal){
 			if(err)
 				res.send(err);
 			res.json(goal);
 		})
 	})

	.put(function(req, res){

		var id = req.params._id;
		var goal = req.body;

		Goal.updateGoal(id, goal, {}, function(err, goal){
			if(err)
				throw err;

			req.json(goal);
		});
	});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Goals API is listening on port: ' + port);

