const { model, Schema } = require("mongoose");

const journalSchema = new Schema(
    {
        journalDate: { type: Date, default: Date.now, required: true},
        journalInput: {type: String, required: true},
        userId: {
            type: Schema.Types.ObjectId, 
            ref: "User",
        },
        
    },
    {timestamps: true}
    );

module.exports = model("Journal", journalSchema);