const express = require("express");

const app = express();                         //Initialize server

require("dotenv").config({
    path: ".env",
    // path: ".env.prod"
});

const userRoutes = require("./routes/userRoutes");
const productRoute = require("./routes/productRoutes");

// app.get("/", (req, res) => {
//     res.send("Server set up Done");
// })

// app.get("/users", (req, res) => {
//     res.json({                                //to send data in json format
//         id: 1,
//         name: "Hello"
//     });
// });

// app.get("/users/1", (req, res) => {
//     res.json({                               //to send data in json format
//         id: 1,
//         name: "Hello user 1"
//     });
// });

// app.get("/users/:id", (req, res) => {       //dynamic routes
//     const clientData = req.params.id;
//     res.json({                              //to send data in json format
//         id: 1,
//         name: "Hello",
//         // clientData: clientData
//         clientData,
//     });
// });

// Mount routes at the root so the routes defined in userRoutes.js work as expected.

// const customMiddleWare = (req, res, next) => {
//     console.log("Custom middleware ");
//     next();
// }

// app.use(customMiddleWare);

app.use("/", userRoutes);
app.use("/admin", productRoute);

const jwt_sec = process.env.JWT_SECRET;
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
    console.log(`JWT Secret: ${jwt_sec}`)
})