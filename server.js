require("dotenv").config()
const express = require('express')
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")
const songRoutes = require("./routes/songRoutes")
const artistRoutes = require("./routes/artistRoutes")

//ket noi toi database
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
    console.log("Connected to MongoDB");
    })
    .catch((err) => {
    console.log(err);
    });

app.use(bodyParser.json({limit: "50mb"}))
app.use(cors())
app.use(morgan("common"))

//routes
app.use("/v1/song", songRoutes)
app.use("/v1/artist", artistRoutes)

app.listen(8000, () => {
    console.log("localhost:8000")
})