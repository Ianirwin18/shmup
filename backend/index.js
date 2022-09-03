const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const router = require("./routes/index.js");
const path = require("path");
dotenv.config();
const app = express();
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "../build")));

// app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => console.log("Server running at port 8000"));
