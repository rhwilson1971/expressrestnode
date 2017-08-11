mongoose=require('mongoose');

var Schema = mongoose.Schema;

var goalSchema = new Schema({
        name: { type: String, required: true },
        description: String,
        frequency: {type: Schema.Types.ObjectId},
        active: {type: Boolean, default: true},
        dateCreated: {type: Date, default: Date.now}
    }
);

var Goal=module.exports=mongoose.model('Goal', goalSchema);

module.exports.getGoals = function(callback, limit){
    console.log('get all goals');
    Contact.find(callback).limit(limit);
};

module.exports.getGoalById = function(id, callback){
    console.log("get goal by id");
    Contact.findById(id, callback);
};

module.exports.addGoal = function(goal, callback){
    console.log("Adding goal");
    console.log(contact);

    Contact.create(contact, callback);
};

module.exports.updateGoal = function(id, goal, options, callback) {
    var query = {_id: id};

    var update = {
        name: contact.first_name,
        description: contact.last_name,
        goal_type: contact.contact_type
    };

    Contact.findOneAndUpdate(query, update, options, callback);
};

module.exports.removeGoal = function(id, callback){

    console.log("Removing contact");
    console.log(id);

    Contact.findByIdAndRemove(id, callback);
};
