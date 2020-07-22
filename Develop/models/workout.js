const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//new schema
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                required: "Please enter exercise type"
            },
            name: {
                type: String,
                required: "Please enter a name"
            },
            duration: {
                type: Number,
                required: "Please enter a duration number"
            },
            weight: {
                type: Number,
                //not required
            },
            reps: {
                type: Number,
                //not required
            },
            sets: {
                type: Number,
                //not required
            },
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);
    //sending schema to workout mongoose

module.exports = Workout;
    //exporting workout const