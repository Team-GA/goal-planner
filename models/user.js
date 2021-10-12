const { Schema, model } = require ("mongoose")
const userSchema = new Schema(
    {
        username: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, validate: {validator: (newEmail) => /@/.test(newEmail), message: ()=> "This email is not valid" }, },
        password: { type: String, required: true },
    },
    {timestamps: true}
);
module.exports = model("User", userSchema);