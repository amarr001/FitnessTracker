const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
      },
    totalDuration: {
        type: Number,
        default: 0
    },
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
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;