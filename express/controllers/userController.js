const users = require("../modules/userModules")

exports.getUsers = (req, res) => {
    res.json(users);
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
}