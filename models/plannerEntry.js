const { model, Schema } = require("mongoose");

const plannerEntrySchema = new Schema(
    {
        plannerDate: {type: Date, required: true},
        plannerInput: {type: String, required: true},
        userID: {type: String, required: true}
    },
    {timestamps: true}
    );

module.exports = model("PlannerEntry", plannerEntrySchema);