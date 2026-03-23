const express = require("express");

const jwt = require("jsonwebtoken");

const app = express();

require("dotenv").config()

const PORT = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;

const authRoute = require("./routes/authRoutes");

const authMiddleware = (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1];
    console.log(`Token: ${token}`);
    console.log(JWT_SECRET);

    if (!token) {
        res.send(`Token not found`);
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        console.log(`Decoded: `, decoded);
        next();
    } catch (err) {
        res.send(`Invalid Token`);
    }
};

// app.use(authMiddleware);

app.use("/", authRoute);

app.use("/admin", authMiddleware);

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})
