const { model, Schema } = require("mongoose");

const plannerEntrySchema = new Schema(
    {
        plannerDate: {type: Date, required: true},
        plannerInput: {type: String, required: true},
        userID: {type: Schema.Types.ObjectId, ref: "User", }
    },
    {timestamps: true}
    );

module.exports = model("PlannerEntry", plannerEntrySchema);