const db = require("../db");
const ToDo = require("../models/toDo");

const main = async () => {
    const newTasks = [
        {
            task: "Finish all homework assignments",
            username: "Kiana_123"
        },
        {
            task: "Go to the grocery store to make dinner",
            username: "Herman_123"
        },
        {
            task: "Buy birthday present for Herman",
            username: "Lynne_123"
        },
        {
            task: "Buy halloween candy for trick-or-treaters",
            username: "Moty_123"
        }
    ];
    await ToDo.deleteMany();
    await ToDo.insertMany(newTasks);
    console.log("Tasks created!")
}

const run = async () => {
    await main();
    db.close()
}

run();