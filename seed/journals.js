const db = require('../db');
const Journal = require('../models/journal')
const User = require("../models/user")


const main = async () => {

    const [ kiana ] = await User.find({ username: "Kiana_123"})
    const journal = [ 
        {
            journalDate: 10/11/2021,
            journalInput: "This is my journal, my truth and im sticking with it. I feel good writting in my journal and everyday i learn from it.",
            userId: kiana._id
        },
        {
            journalDate: 9/10/2021,
            journalInput: "Woke up this morning feeling great, worked out, ate breakfast and now im coding my life away on some i wanna be great type shit.",
            userId: kiana._id
        },
        {
            journalDate: 10/15/2021,
            journalInput: "boba is life, i have  dreams of opening a boba shop some day, I am going to name a boba tea after myself and my pet.",
            userId: kiana._id
        },
        {
            journalDate: 9/1/2021,
            journalInput: "I promised herman i would take him to a place that serves kunafe, i love my countries food but most importantly i love food and a good time.",
            userId: kiana._id
        }
  
    ]


    await Journal.insertMany(journal) 
        console.log('Journal has been created')
    
}

const run = async () => {
    await main();
    db.close();
}

run();