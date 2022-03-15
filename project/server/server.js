const express=require("express");
const app=express();
const port=3000;
const fs = require("fs");
const cors = require("cors");

app.use(cors());

const getData = (path) => JSON.parse(fs.readFileSync(path));

app.get("/atributi-zadataka",(req,res)=>{
    const zadatci = getData("db/zadatci.json");
    /* res.send( {zadatci} );  */
    res.send( zadatci); 
    /* console.log("Hello from server. "); */
});

app.get("/atributi-zadataka/one",(req, res) => {
    const { id } = req.query;
    const zadatci = getData("db/zadatci.json");

    const assignment = zadatci.find( (zadatak) => zadatak.id === +id );   
    res.send({ zadatak: assignment });
});

app.get("/atributi-predmeta",(req,res)=>{
    const zadatci = getData("db/predmeti.json");
    /* res.send( {zadatci} );  */
    res.send( zadatci); 
    /* console.log("Hello from server. "); */
});

/* app.get("/", (req, res) => { */
    app.get("/atributi-pismena", (req, res) => {
    const arr = JSON.parse(fs.readFileSync("database/atributi-pismena.json"));
    res.send({arr});
  });
app.listen(port,()=>{
    console.log("> Server is up and running on port: "+port)
});
