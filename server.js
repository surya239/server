import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require("express");
const app = express();
const jwt = require('jsonwebtoken')
const cors = require('cors');
app.use(cors());
app.use(express.json())
app.get("*", (req, res) => {
    res.send("Hello")
} )
const PORT = 5000
app.listen(PORT, () =>{
    console.log("App Listening in ", PORT)
})