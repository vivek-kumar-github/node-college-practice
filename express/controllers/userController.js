const users = require("../modules/userModules")

exports.dynamicRoute = (req, res) => {
    const param1 = req.params.id;
    const param2 = req.params.role;
    console.log(`ID ${param1}`);
    console.log(`Role ${param2}`);
    res.end(`ID ${param1}\nRole ${param2}`);
}

exports.getStudents = (req, res) => {

}

exports.QueryParam = (req, res) => {
    const q1 = req.query.name;
    console.log(`Search query ${q1}`);
    res.end(q1);
}

exports.home = (req, res) => {
    res.end(`Home page`);
}

exports.getUsers = (req, res) => {
    res.json(users);
}

exports.addUsers = (req, res) => {
    res.send("response sent");

}

exports.getUserById = (req, res) => {
    const userId = Number(req.params.id);

    const user = users.find((u) => u.id === userId);

    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    res.json(user);
    // res.redirect("/users"); //redirects to this route
}