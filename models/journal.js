const { model, Schema } = require("mongoose");

const journalSchema = new Schema(
    {
        journalDate: {type: Date, required: true},
        journalInput: {type: String, required: true},
        userID: {type: String, required: true}
    },
    {timestamps: true}
    );

module.exports = model("Journal", journalSchema);