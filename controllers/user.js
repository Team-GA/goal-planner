const User = require("../models/user");
// const utils = require("../utils/index");
const { comparePasswords, createUserInfo, hashPassword, createToken } = require('../utils')

const register = async (req, res) => {
    try {
        const newUser = {
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hashPassword(req.body.password)
        } 
        const user = await User.create(newUser);
        const userInfo = createUserInfo(user);
        const token = createToken(userInfo);
        return res.status(201).json({user: userInfo, token})
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
};
const login = async (req, res) => {
    try {
        const [user] = await User.find({username: req.body.username})
        if (comparePasswords(req.body.password, user.password)){
            const userInfo = createUserInfo(user);
            const token = createToken(userInfo)
            return res.status(200).json({ user: userInfo, token })
        } else {
            return res.status(401).json({message: "Not authorized ⛔️"})
        }
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
};
const verifyUser = async (req, res) => {
    try {
        const userInfo = createUserInfo(res.locals.user)
        return res.status(200).json({ user: userInfo })
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
};

module.exports = {
    register,
    login,
    verifyUser
}
