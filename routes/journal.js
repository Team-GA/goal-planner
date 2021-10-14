const { Router } = require("express");
const journalController = require("../controllers/journal");

const { restrict } = require("../utils");

const journalRouter = new Router();

journalRouter.get("/journals", restrict, journalController.getAllJournals );
journalRouter.get("/journal/:id", restrict,  journalController.findJournalById );
journalRouter.post("/newJournal", restrict,  journalController.createJournal );
journalRouter.put("/journal/:id", restrict, journalController.updateJournal );
journalRouter.delete("/journal/:id", restrict, journalController.deleteJournal );

module.exports = journalRouter;