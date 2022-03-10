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

app.get("/", (req, res) => {
  const arr = JSON.parse(fs.readFileSync("database/atributi-pismena.json"));
  res.send({ arr });
});

app.post("/one", (req, res) => {
  let atributi = readDb("database/atributi-pismena.json");
  // console.log(res.body);
  // console.log(req.body);

  const lastAtribut = atributi[atributi.length - 1];
  console.log(lastAtribut.id);
  console.log(lastAtribut.idNum);
  let idChar = "KTG-";
  if (+lastAtribut.idNum >= 9) {
    idChar = idChar + (+lastAtribut.idNum + 1);
  } else {
    idChar = idChar + "0" + (+lastAtribut.idNum + 1);
  }

  let idNumChar = "" + (+lastAtribut.idNum + 1);
  console.log(idNumChar);

  console.log(idChar);

  atributi.push({
    ...req.body,
    id: idChar,
    idNum: idNumChar,
  });
  saveDb("database/atributi-pismena.json", atributi);
  res.send({ atributi });
});
//   data.push(x);
//   console.log("bzvz");
//   saveDb("database/atributi-pismena.json", data);
//   res.send(data);
//   console.log("bzvz");
// });
app.listen(port, () => {
  console.log("> Server is up and running on port: " + port);
});
