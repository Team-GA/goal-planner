const db = require("../db");
const ToDo = require("../models/toDo");

const main = async () => {
    const [ taskUser ] = await User.find({ username: ""})
    const newTasks = [
        {
            task: "Finish all homework assignments",
            userId: taskUser._id
        },
        {
            task: "Go to the grocery store to make dinner",
            userId: taskUser._id
        },
        {
            task: "Buy birthday present for Herman",
            userId: taskUser._id
        }
    ];
    await ToDo.deleteMany();
    await ToDo.insertMany(newTasks);
    console.log("Tasks created!")
}

const run = async () => {
    await createTasks();
    db.close()
}

main();