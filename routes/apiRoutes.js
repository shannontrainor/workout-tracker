const router = require("express").Router();
const Workout = require("../models/workout");
const { db } = require("../models/workout");
const { Router } = require("express");


//add to previous
//add new
//combined weight

//GET workouts
router.get("/workouts", (req,res) => {
    db.Workout.find({}).then((result) => {
        res.json(result);
    })
    .catch((err) => {
        if (err) {
            res.status(500).json(err);
        }
    });
    
});

//add new - POST
router.post("/api/workout", (req, res) => {
    Workout.create({}).then((result) => {
        res.json(result);
    })
    .catch((err) => {
        if (err) {
            res.status(500).json(err);
        }
    });
});

//add to existing - PUT
router.put("/api/workout/:id", (req,res) => {
    Workout.updateOne(
        { _id: req.params.id },
        { $push: {exercises: req.body } }
    )
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        if (err) {
            res.status(500).json(err);
        }
    });
        
});


module.exports = router;
