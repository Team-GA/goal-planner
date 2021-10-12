const db = require("../db");
const ToDo = require("../models/toDo");

const main = async () => {
    const newTasks = [
        {
            task: "Finish all homework assignments",
            userId: null
        },
        {
            task: "Go to the grocery store to make dinner",
            userId: null
        },
        {
            task: "Buy birthday present for Herman",
            userId: null
        },
        {
            task: "Buy halloween candy for trick-or-treaters",
            userId: null
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