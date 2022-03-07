const express=require("express");
const app=express();
const port=3000;
const fs = require("fs");
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
    const arr = JSON.parse(fs.readFileSync("database/atributi-pismena.json"));
    res.send({arr});
  });
app.listen(port,()=>{
    console.log("> Server is up and running on port: "+port)
});