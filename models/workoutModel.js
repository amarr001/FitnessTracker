const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
      },
    exercises: [{
        name: {
        type: String,
        trim: true,
        required: "Enter a name for your exercise"
        },
        type: {
            type: String,
            trim: true,
            required: "Enter a type"
            },
        reps: {
            type: Number,
            required: "How many reps for this exercise?"
        },
        sets: {
            type: Number,
            required: "How many sets for this exercise?"
        },
        weight: {
            type: Number,
            required: "How much weight are you using?"
        }
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;