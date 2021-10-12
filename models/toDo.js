const { model, Schema } = require("mongoose");

const toDoSchema = new Schema(
    {
        toDoList: { type: String, required: true },
        userId: { type: Schema.Types.ObjectId, ref: "User" },
    },
    { timestamps: true }
);

module.exports = model("ToDo", toDoSchema);