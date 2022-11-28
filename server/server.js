const http = require("http");
const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const route = require("./route");

const server = http.createServer(app).listen(process.env.PORT || 8080, () => {
   console.log("Server started.......");
   console.log(process.env.NODE_ENV, process.env.PORT);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(cors({origin: "*", credential: 'true'}));
app.use(route);

axios.defaults.withCredentials = true;

app.use(express.static("build"));

app.use("/", function (req, res) {
   res.sendFile(__dirname + "/build/index.html");
});