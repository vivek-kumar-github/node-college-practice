const jwt = require("jsonwebtoken");
require("dotenv").config()

const jwtToken = process.env.JWT_SECRET;
console.log(jwtToken);

exports.getAuthToken = (req, res) => {
    const userName = req.query.userName
    const email = req.query.email

    const token = jwt.sign({ userName, email }, jwtToken);

    res.json({ token });
}