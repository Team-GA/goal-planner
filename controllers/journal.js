const Journal = require('../models/journal');

const getAllJournals = async (req, res) => {
    try {
        const journals = await Journal.find();
        res.json(journals)
    } catch (error) {
        res.status(500).json({ error: error.message }) 
    }
}

const createJournal = async (req, res) => {
    try {
        const journal = new Journal(req.body);
        await journal.save()
        res.status(201).json(journal);
    } catch (error) {
        res.status(500).json({ error: error.message }) 
    }
}

const updateJournal = async (req, res) => {
    try {
        const { id } = req.params;
        Journal.findByIdAndUpdate( id, req.body, { new: true}, (err, journal) => {
            if (err) {
                return res.status(500).json({ error: err.message });
              }
              if (!journal) {
                return res.status(404).json({ message: "journal not found" });
              }
              res.status(200).json(journal);
        });
    } catch (error) {
        res.status(500).json({ error: error.message }) 
    }
}

const findJournalById = async (req, res) => {
    try {
        const { id } = req.params;
        const journal = await Journal.findById(id);
        // res.json
        if(journal) {
            return res.status(201).json(journal);
        } else if (!journal) {
            res.status(404).json({ error: "journal not found"})
        }
    } catch (error) {
        res.status(500).json({ error: error.message }) 
    }
}

const deleteJournal = async (req, res) => {
    try {
        const { id } = req.params;
        Journal.findByIdAndDelete( id, (err, journal) => {
            if(err) {
                return res.status(500).json({error: err.message})
            }
            if(!journal) {
                return res.status(404).json({ error: `user journal ${id} not found`})
            }
            res.status(200).json(`post id ${id} successfully deleted`)
            
        })
    } catch (error) {
        res.status(500).json({ error: error.message }) 
    }
}

module.exports = {
    getAllJournals,
    createJournal,
    updateJournal,
    findJournalById,
    deleteJournal
  
  }