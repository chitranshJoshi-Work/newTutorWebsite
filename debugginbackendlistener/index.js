const express = require("express");
var morgan = require("morgan");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
const port = 5900;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan("combined"));
// morgan(app, { logAllReqHeader: true, maxBodyLength: 5000 });
app.use(express.json({ extended: false }));
app.post("/check", (req, res) => {
  console.log("body :", req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
