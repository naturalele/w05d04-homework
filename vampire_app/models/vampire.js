const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const vampireSchema = new Schema({
	name: {type: String, required: true},
	portrayed_by: String,
	is_actually: String,
	hates: [String],
	hair_color: {type: String, default: "blonde"},
	eye_color: {type: String},
	dob: Date,
	loves: [String],
	location: String,
	gender: String,
	victims: Number, minimum: 0
})

const Vampires = mongoose.model('Vampires', vampireSchema);

module.exports = Vampires;