const express = require("express");

const app = express();                         //Initialize server

const userRoutes = require("./routes/userRoutes");

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
app.use("/", userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})