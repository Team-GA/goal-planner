const { model, Schema } = require("mongoose");

const journalSchema = new Schema(
    {
        journalDate: { type: Date, default: Date.now, required: true},
        journalInput: {type: String, required: true},
        userID: {
            type: Schema.Types.ObjectId, 
            ref: "user",
        },
        
    },
    {timestamps: true}
    );

module.exports = model("Journal", journalSchema);