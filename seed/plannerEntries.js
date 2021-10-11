const db = require("../db");
const JournalEntry = require("../models/plannerEntry");

const plannerEntries = async() => {
    const d = new Date();

    const plannerEntries = [
        {
            plannerDate: d,
            plannerInput: "Seeding journal entry.",
            userID: " ",
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