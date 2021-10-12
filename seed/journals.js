const db = require('../db');
const Journal = require('../models/Journal')


const main = async () => {
    const [ journalUser ] = await User.find({ username: ""})
    const journal = [ 
        {
            journalDate: 10/10/2021,
            journalInput: "This is my journal, my truth and im sticking with it. I feel good writting in my journal and everyday i learn from it.",
            userId: journalUser._id
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