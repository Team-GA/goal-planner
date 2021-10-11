const { model, Schema } = require("mongoose");

const toDoSchema = new Schema(
    {
        toDoList: { type: String, required: true },
        userId: { type: Schema.Types.ObjectId, ref: "User" },
    },
    { timestampls: true }
);

module.exports = model("ToDo", toDoSchema);