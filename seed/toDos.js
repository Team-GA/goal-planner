const db = require("../db");
const ToDo = require("../models/toDo");

const createTasks = async () => {
    const newTasks = [
        {
            task: "Finish all homework assignments"
        },
        {
            task: "Go to the grocery store to make dinner"
        },
        {
            task: "Buy birthday present for Herman"
        }
    ];
    await ToDo.create(newTasks);
    console.log("Tasks created!")
}

const main = async () => {
    await createTasks();
    db.close()
}

main();