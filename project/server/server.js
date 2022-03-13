const express=require("express");
const app=express();
const port=3000;
const fs = require("fs");
const cors = require("cors");

app.use(cors());

const getData = (path) => JSON.parse(fs.readFileSync(path));

app.get("/",(req,res)=>{
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

app.listen(port,() =>{
    console.log("> Server is up and running on port : "+port);
});
app.use(cors());

app.get("/", (req, res) => {
    const arr = JSON.parse(fs.readFileSync("database/atributi-pismena.json"));
    res.send({arr});
  });
app.listen(port,()=>{
    console.log("> Server is up and running on port: "+port)
});
