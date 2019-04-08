mongoose=require('mongoose');

var Schema = mongoose.Schema;


/*
     
    {
        measurement: "209.0",
        measureSizeType: "lbs",
        measureType: "weight"
        record

    }


*/

var mearurementSchema = new Schema({
        measurement: { type: Decimal128, required: true },
        measureUnit: {type: String},
        measureType: {type: String},
        recordDate: {type: Date},
        dateCreated: {type: Date, default: Date.now},
        dateUpdated: {type: Date}
    });

var Measurement=module.exports=mongoose.model('Measurement', mearurementSchema);

module.exports.getMeasurements = function(callback, limit){
    console.log('get all measurements');
    Measurement.find(callback).limit(limit);
};

module.exports.getMeasurementById = function(id, callback){
    console.log("get measurement by id");
    Measurement.findById(id, callback);
};

module.exports.addMeasurement = function(measurement, callback){
    console.log("Adding measurement");
    console.log(measurement);
    Measurement.create(measurement, callback);
};

module.exports.updateMeasurement = function(id, measurement, options, callback) {
    var query = {_id: id};

    var update = {
        name: measurement.name,
        description: measurement.description,
        aerobic: mearurement.aerobic
    };

    update.dateUpdated = Date.now();
    Measurement.findOneAndUpdate(query, update, options, callback);
};

module.exports.removeMeasurement = function(id, callback){
    console.log("Removing measurement");
    console.log(id);

    Measurement.findByIdAndRemove(id, callback);
};
