const { compareSync, hashSync } = require("bcrypt");
const { sign, verify } = require("jsonwebtoken");
const User = require("../models/user");

const SALT = process.env.SALT || 10; 
const SECRET = process.env.SECRET || "HELLOUSER"; 

const createUserInfo = (user) => {
    return {
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        id: user._id,
    };
}
const createToken = (payload) => sign(payload, SECRET);
const comparePasswords = (password, passwordDigest) => compareSync(password, passwordDigest);
const hashPassword = (password) => hashSync(password, SALT);

const restrict = async (req, res, next) => {
    try {
        if(!req.headers.authorization) {
            throw new Error("Failed to Provide Authorization Token❌");

        }
        console.log(req.headers.authorization);
        const token = req.headers.authorization.split(" ")[1];
        const { username } = verify(token, SECRET)
        if (username){
            const [user] = await User.find({ username });
            res.locals.user = user;
            next(); 
        } else {
            throw new Error("User not Authorized!⛔️")
        }
    } catch (error) {
        return res.status(401).json({ message: error.message })
    }
}
module.exports = {
    createToken,
    createUserInfo,
    comparePasswords,
    restrict,
    hashPassword
}
