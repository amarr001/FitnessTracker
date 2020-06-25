const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({

exercises: [{
    name: {
    type: String
    },
    type: {
    type: String,
        },
    reps: {
    type: Number
    },
    sets: {
    type: Number
    },
    weight: {
    type: Number
    },
    duration: {
        type: Number
    },
    distance: {
        type: Number
    }
}]
})

const Exercises = mongoose.model("Exercises", exerciseSchema);

module.exports = Exercises;