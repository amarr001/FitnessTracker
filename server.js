const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require ("path");


const PORT = process.env.PORT || 8080;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });

db.Exercises.create({ name: "Bench Press" })
  .then(dbExercises => {
    console.log(dbExercises);
  })
  .catch(({ message }) => {
    console.log(message);
  });

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/exercise.html"));  
});

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/stats.html"));
});

app.post("/api/workouts", (req, res) => {
  db.Exercises.create(body)
  .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
})

app.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

