const { Router } = require("express");
const journalController = require("../controllers/journal");

const { restrict } = require("../utils");

const journalRouter = new Router();

journalRouter.get("/journals", journalController.getAllJournals );
journalRouter.get("/journal/:id", journalController.findJournalById );
journalRouter.post("/newJournal", journalController.createJournal );
journalRouter.put("/journal/:id", journalController.updateJournal );
journalRouter.delete("/journal/:id", journalController.deleteJournal );

module.exports = journalRouter;