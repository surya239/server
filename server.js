import { createRequire } from "module";
const require = createRequire(import.meta.url);
const path = require('path')

const express = require("express");
const app = express();
const jwt = require('jsonwebtoken')
const cors = require('cors');
app.use(cors());
app.use(express.json())
const __dirname = path.resolve();
const html = "<h1> Hello World </h1>"
app.get("*", (req, res) => {

    res.send(html)
} )
const PORT = 5000
app.listen(PORT, () =>{
    console.log("App Listening in ", PORT)
})