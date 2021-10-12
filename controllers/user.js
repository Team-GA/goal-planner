const User = require("../models/user");
const utils = require("../utils/index");
// { comparePasswords, createUserInfo, hashPassword, createToken } 
const register = async (req, res) => {
    try {
        const newUser ={
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: utils.hashPassword(req.body.password)
        } 
        const user = await User.create(newUser);
        const userInfo = utils.createUserInfo(user);
        const token = utils.createToken(userInfo);
        return res.status(201).json({user: userInfo, token})
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
};
const login = async (req, res) => {
    try {
        const [user] = await User.find({username: req.body.username})
        if (utils.comparepasswords(req.body.password, user.password)){
            const userInfo = utils.createUserInfo(user);
            const token = utils.createToken(userInfo)
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
        const userInfo = utils.createUserInfo(res.locals.user)
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
