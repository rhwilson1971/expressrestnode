mongoose=require('mongoose');

var Schema = mongoose.Schema;

var exerciseSchema = new Schema({
        name: { type: String, required: true },
        aerobic: { Type: Boolean, required: true},
        description: String,
        dateCreated: {type: Date, default: Date.now},
        dateUpdated: {type: Date}
    });

var Exercise=module.exports=mongoose.model('Exercise', exerciseSchema);

module.exports.getExercise = function(callback, limit){
    console.log('get all exercises');
    Exercise.find(callback).limit(limit);
};

module.exports.getExerciseById = function(id, callback){
    console.log("get exercise by id");
    Exercise.findById(id, callback);
};

module.exports.addExercise = function(exercise, callback){
    console.log("Adding exercise");
    console.log(exercise);

    Exercise.create(exercise, callback);
};

module.exports.updateExercise = function(id, exercise, options, callback) {
    var query = {_id: id};

    var update = {
        name: exercise.name,
        description: exercise.description,
        aerobic: exercise.aerobic
    };

    update.dateUpdated = Date.now();
    Exercise.findOneAndUpdate(query, update, options, callback);
};

module.exports.removeExercise = function(id, callback){
    console.log("Removing exercise");
    console.log(id);

    Exercise.findByIdAndRemove(id, callback);
};
