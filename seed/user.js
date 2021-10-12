const db = require ("../db/index")
const User = require("../models/user")
const { hashPassword } = require('../utils/index')

const createUsers = async () => {
    const users = [
        {
            username: "Kiana_123",
            firstname: "kiana",
            lastname: "chi",
            email: "kiana@smile.co",
            password: hashPassword("pass123")

        },
        {
            username: "Herman_123",
            firstname: "herman",
            lastname: "GA",
            email: "herman@smile.co",
            password: hashPassword("pass234")

        },
        {
            username: "Lynne_123",
            firstname: "lynne",
            lastname: "GA",
            email: "lynne@smile.co",
            password: hashPassword("pass345")

        },
        {
            username: "Moty_123",
            firstname: "moty",
            lastname: "GA",
            email: "moty@smile.co",
            password: hashPassword("pass456")

        }
    ];
    await User.insertMany(users);
}
const run = async () => {
    await createUsers();
    db.close();
}
run();

