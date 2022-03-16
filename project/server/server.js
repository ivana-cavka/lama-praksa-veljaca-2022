const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const readDb = (path) => JSON.parse(fs.readFileSync(path));
const saveDb = (path, payload) => {
  fs.writeFileSync(path, JSON.stringify(payload), { encoding: "utf8" });
};

app.use(bodyParser.json());

app.use(cors());

const getData = (path) => JSON.parse(fs.readFileSync(path));

app.get("/atributi-zadataka", (req, res) => {
  const zadatci = getData("db/zadatci.json");
  /* res.send( {zadatci} );  */
  res.send(zadatci);
  /* console.log("Hello from server. "); */
});

app.get("/atributi-zadataka/one", (req, res) => {
  const { id } = req.query;

  const zadatci = getData("db/zadatci.json");

  const assignment = zadatci.find((zadatak) => zadatak.id === +id);
  res.send({ zadatak: assignment });
});

app.get("/atributi-predmeta", (req, res) => {
  const predmeti = getData("db/predmeti.json");
  /* res.send( {predmeti} );  */
  res.send(predmeti);
  /* console.log("Hello from server. "); */
});

app.get("/atributi-predmeta/one", (req, res) => {
  const { id } = req.query;

  const predmeti = getData("db/predmeti.json");

  const assignment = predmeti.find((predmet) => predmet.id === +id);
  res.send({ predmet: assignment });
});

/* app.get("/", (req, res) => { */
app.get("/atributi-pismena", (req, res) => {
  const arr = JSON.parse(fs.readFileSync("database/atributi-pismena.json"));
  res.send({ arr });
});
app.listen(port, () => {
  console.log("> Server is up and running on port: " + port);
});

app.post("/atributi-zadataka", (req, res) => {
  let atributi = readDb("db/zadatci.json");

  atributi.push({
    ...req.body,
  });
  saveDb("db/zadatci.json", atributi);
  res.send({ atributi });
});

app.post("/atributi-predmeti", (req, res) => {
  let atributi = readDb("db/predmeti.json");
  console.log(atributi.vrsta);

  atributi.vrsta.push({
    ...req.body,
  });

  saveDb("db/predmeti.json", atributi);
  res.send({ atributi });
});

