const { model, Schema } = require("mongoose");

const journalSchema = new Schema(
    {
        journalDate: {type: Date, required: true},
        journalInput: {type: String, required: true},
        userID: {
            type: Schema.Types.ObjectId, 
            ref: "user",
            required: true
        }
    },
    {timestamps: true}
    );

module.exports = model("Journal", journalSchema);