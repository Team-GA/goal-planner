const { Schema, model } = require ("mongoose")
const userSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        email: { type: String, required: true, validate: {validator: (newEmail) => /@/.test(newEmail), message: ()=> "This email is not valid" }, },
        password: { type: String, required: true },
    },
    {timestamps: true}
);
module.exports = model("User", userSchema);