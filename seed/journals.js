const db = require('../db');
const Journal = require('../models/journal')
const User = require("./user")


const main = async () => {
    // const [ journalUser ] = await User.find({ username: ""})
    const kiana = await User.find({ username: "Kiana_123"})
    const herman = await User.find({ username: "Herman_123"})
    const lynne = await User.find({ username: "Lynne_123"})
    const moty = await User.find({ username: "Moty_123"})
    const journal = [ 
        {
            journalDate: 10/11/2021,
            journalInput: "This is my journal, my truth and im sticking with it. I feel good writting in my journal and everyday i learn from it.",
            // username:"Kiana_123"
            userId: kiana[0]._id
        },
        {
            journalDate: 9/10/2021,
            journalInput: "Woke up this morning feeling great, worked out, ate breakfast and now im coding my life away on some i wanna be great type shit.",
            // username:"Herman_123"
            userId: herman[0]._id
        },
        {
            journalDate: 10/15/2021,
            journalInput: "boba is life, i have  dreams of opening a boba shop some day, I am going to name a boba tea after myself and my pet.",
            // username:"Lynne_123"
            userId: lynne[0]._id
        },
        {
            journalDate: 9/1/2021,
            journalInput: "I promised herman i would take him to a place that serves kunafe, i love my countries food but most importantly i love food and a good time.",
            // username:"Moty_123",
            userId: moty[0]._id
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