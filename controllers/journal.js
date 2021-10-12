const Journal = require('../models/journal');

const getAllJournals = async (req, res) => {
    try {
        const journals = await Journal.find();
        res.json(journals)
    } catch (error) {
        res.status(500).json({ error: e.message }) 
    }
}

const createJournals = async (req, res) => {
    try {
        const journal = new Journal(req.body);
        await journal.save()
        res.status(201).json(journal);
    } catch (error) {
        res.status(500).json({ error: e.message }) 
    }
}

const updateJournals = async (req, res) => {
    try {
        const { id } = req.params;
        const journal = await journal.findByIdAndUpdate( id, req.body, { new: true}, (err, journal) => {
            if (err) {
                return res.status(500).json({ error: err.message });
              }
              if (!post) {
                return res.status(404).json({ message: "journal not found" });
              }
              res.status(200).json(post);
        });
    } catch (error) {
        res.status(500).json({ error: e.message }) 
    }
}

const findJournalById = async (req, res) => {
    try {
        const { id } = req.params;
        const journal = await journal.findById(id);
        if(journal) {
            return res.json(201).json(journal);
        }
    } catch (error) {
        res.status(500).json({ error: e.message }) 
    }
}

const deleteJournal = async (req, res) => {
    try {
        const { id } = req.params;
        const journal = await journal.findByIdAndDelete( id, (err, journal) => {
            if(err) {
                return res.status(500).json({error: err.message})
            }
            if(!journal) {
                return res.status(404).json({ error: `user journal ${id} not found`})
            }
            res.status(200).json(`post id ${id} successfully deleted`)
            
        })
    } catch (error) {
        res.status(500).json({ error: e.message }) 
    }
}

module.exports = {
    getAllJournals,
    createJournals,
    updateJournals,
    findJournalById,
    deleteJournal
  
  }