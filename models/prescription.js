var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/test3';

MongoClient.connect(url, function(err,db){
	assert.equal(null,err);
	console.log("Connect to mongodb successfully.");
	db.close();
});


var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var address = new Schema({street1: string, street2: string, street3: string, city: string, state: string, zipcode: string});

var contact = new Schema({name: string, relationship: string, phone: string});
var doctor = new Schema({name: string, practice: string, address: address, phone: string, fax: string, portal: string});
var refill = new Schema({date: Date, dosage: string, count: string});
var pharmacy = new Schema({name: string, workAddress: address, phone: string: fax: string})

var patient = new Schema({name: string, homeAddres: address, phone: string, sms: boolean, email: string, emergencyContact: contact});

var PrescriptionSchema = new Schema({
	name: string,
  genericName: string,
  mechanism: string,
  prescribedFor: string,
  start: Date,
  prescription_id: string,
  doctorInfo: doctor,
  refills: refill[],
  pharmacyInfo: pharmacy,
  patientInfo: patient,
  emergencyContact: contact,
});

module.exports = mongoose.model('Prescription', PrescriptionSchema);