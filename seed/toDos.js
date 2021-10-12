const db = require("../db");
const ToDo = require("../models/toDo");
const User = require("../models/user")

const main = async () => {
    const kiana = await User.find({ username: "Kiana_123"})
    const herman = await User.find({ username: "Herman_123"})
    const lynne = await User.find({ username: "Lynne_123"})
    const moty = await User.find({ username: "Moty_123"})
    const newTasks = [
        {
            task: "Finish all homework assignments",
            userId: kiana[0]._id
        },
        {
            task: "Go to the grocery store to make dinner",
            userId: herman[0]._id
        },
        {
            task: "Buy birthday present for Herman",
            userId: lynne[0]._id
        },
        {
            task: "Buy halloween candy for trick-or-treaters",
            userId: moty[0]._id
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