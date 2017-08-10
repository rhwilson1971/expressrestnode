mongoose=require('mongoose');

var Schema = mongoose.Schema;

var goalSchema = new Schema({
        first_name: { type: String, required: true },
        last_name: String,
        contact_type: { type: String, require: true },
        address: {
            street1: String,
            street2: String,
            street3: String,
            city: String,
            state: String,
            zip: String
        },
        description: String,
        phone_number: { type: String, required: true },
        email: String,
        active: {type: Boolean, default: true},
        dateCreated: {type: Date, default: Date.now},
        notes: String
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
        first_name: contact.first_name,
        last_name: contact.last_name,
        contact_type: contact.contact_type,
        address : {
            street1: contact.address.street1,
            street2: contact.address.street2,
            street3: contact.address.street3,
            city: contact.address.city,
            state: contact.address.state,
            zip: contact.address.zip
        },
        description: contact.description,
        active: contact.active,

        phone_number: contact.phone_number,
        email: contact.email,
        notes: contact.notes
    };

    Contact.findOneAndUpdate(query, update, options, callback);
};

module.exports.removeGoal = function(id, callback){

    console.log("Removing contact");
    console.log(id);

    Contact.findByIdAndRemove(id, callback);
};
