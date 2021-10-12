const db = require("../db");
const ToDo = require("../models/toDo");
const User = require("../models/user")

const main = async () => {
    const kiana = await User.find({ username: "Kiana_123"})
    const newTasks = [
        {
            task: "Finish all homework assignments",
            userId: kiana._id
        },
        {
            task: "Go to the grocery store to make dinner",
            userId: kiana._id
        },
        {
            task: "Buy birthday present for Herman",
            userId: kiana._id
        },
        {
            task: "Buy halloween candy for trick-or-treaters",
            userId: kiana._id
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