'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bugSchema = new Schema({
	"id": NUMBER,
	"issueId": "FREE TEXT",
	"dateCreated":DATE,
	"summary": "FREE TEXT",
	"description": "FREE TEXT",
	"highPriority": "TEXT:Values{TRUE,FALSE}",
	"severity": "TEXT:Values{HIGH,MEDIUM,LOW}",
	"reporter": "FREE TEXT/USER",
	"assignedUser": "FREE TEXT/USER",
	"actions": [{"user": "FREE TEXT/USER",
	"dateCreated":DATE,"action": "FREE TEXT"},
	{"user": "FREE TEXT/USER","dateCreated":DATE,"action": "FREE TEXT"}],
	"status": "ENUM:Values{TO DO,IN PROGRESS, IN REVIEW, IN TEST, IN DEMO, DONE}"
});

module.exports = mongoose.model('bug',bugSchema);