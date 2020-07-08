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

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/exercise.html"));  
});

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/stats.html"));
});

app.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post("/api/workouts", (req, res) => {
  const workout = req.body;

  db.Workout.create(workout).then(result => {
      console.log(result);

      res.json(result);
  })
})

app.put("/api/workouts/:id", (req, res) => {
  const exercise = req.body;
  const workoutId = req.params.id

  db.Workout.findById(workoutId).then(workout => {
      
      workout.exercises.push(exercise);
      workout.totalDuration += exercise.duration;
      workout.save().then(result => {
          res.json(result);
      })
      
  })
})

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

