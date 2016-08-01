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

var PrescriptionSchema = new Schema({
	name: String,
  genericName: String,
  mechanism: String,
  prescribedFor: String,
  start: Date,
  prescription_id: String,
  doctorInfo: {
    name: String,
    practice: String,
    address: {
      street: [String],
      city: String,
      state: String,
      county: String,
      zipcode: String,
      zipcode4: String           
    },
    phone: String,
    fax: String,
    patientPortal: String,
    email: String,
    website: String,
    type: String
  },

  refills: [{
    date: Date,
    dosage: String,
    count: String
  }],
  pharmacyInfo: {
    name: String,
    address: {
      street: [String],
      city: String,
      state: String,
      county: String,
      zipcode: String,
      zipcode4: String       
    },
    phone: String,
    fax: String,
    hours: {
      open: String,
      closed: String
    },
    pharmicist: String    
  },

  patientInfo: {
    name: String, 
    homeAddres: {
      street: [String],
      city: String,
      state: String,
      county: String,
      zipcode: String,
      zipcode4: String       
    }, 
    phone: String, 
    sms: Boolean, 
    email: String, 
    emergencyContact: [{name: String, relationship: String, phone: String}]
  },
});



