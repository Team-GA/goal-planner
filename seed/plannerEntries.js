const db = require("../db");
const JournalEntry = require("../models/plannerEntry");

const plannerEntries = async() => {
    const kiana = await User.find({ username: "Kiana_123"})
    const d = new Date();

    const plannerEntries = [
        {
            plannerDate: d,
            plannerInput: "Seeding planner entry.",
            userId: kiana[0]._id
        }
    ]

    await JournalEntry.insertMany(plannerEntries);
    console.log("Created entries!");
}

const run = async () => {
    await plannerEntries();
    db.close;
}

run();