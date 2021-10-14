const { model, Schema } = require("mongoose");

const toDoSchema = new Schema(
    {
        task: { type: String, required: true },
        userId: { type: Schema.Types.ObjectId, ref: "User" },
    },
    { timestamps: true }
);

module.exports = model("ToDo", toDoSchema);