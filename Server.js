const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const clusterURL = "mongodb+srv://canacademy:cana9875sh@canacademy.a2xbmdz.mongodb.net/EBlogger"

app.use(cors());
app.use(express.json());

//Connect Database
mongoose.connect(clusterURL)  

//Calling Endpoints

app.use("/", require("./Routes/Users_Route"));

//Testing Back-End
app.listen(8000, 'https://e-bloger-server-master.vercel.app/', function() {
    console.log("Server was up")
})