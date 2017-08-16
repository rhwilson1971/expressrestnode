mongoose=require('mongoose');

var Schema = mongoose.Schema;

var goalSchema = new Schema({
        name: { type: String, required: true },
        description: String,
        frequency: [{type: String}],
        active: {type: Boolean, default: true},
        labels: [{type: String}],
        dateCreated: {type: Date, default: Date.now},
        dateUpdated: {type: Date}
    });

var Goal=module.exports=mongoose.model('Goal', goalSchema);

module.exports.getGoals = function(callback, limit){
    console.log('get all goals');
    Goal.find(callback).limit(limit);
};

module.exports.getGoalById = function(id, callback){
    console.log("get goal by id");
    Goal.findById(id, callback);
};

module.exports.addGoal = function(goal, callback){
    console.log("Adding goal");
    console.log(goal);

    Goal.create(goal, callback);
};

module.exports.updateGoal = function(id, goal, options, callback) {
    var query = {_id: id};

    var update = {
        name: goal.name,
        description: goal.description,
        frequency: goal.frequency,
        labels: goal.labels,
        goal_type: goal.goal_type
    };

    update.dateUpdated = Date.now();

    Goal.findOneAndUpdate(query, update, options, callback);
};

module.exports.removeGoal = function(id, callback){
    console.log("Removing goal");
    console.log(id);

    Goal.findByIdAndRemove(id, callback);
};
