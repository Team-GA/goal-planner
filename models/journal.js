const { model, Schema } = require("mongoose");

const journalSchema = new Schema(
    {
        journalDate: {type: Date, required: true},
        journalInput: {type: String, required: true},
        userID: {
            type: Schema.Types.ObjectId, 
            ref: "user",
            required: true
        },
        date: { type: Date, default: Date.now}
    },
    {timestamps: true}
    );

module.exports = model("Journal", journalSchema);