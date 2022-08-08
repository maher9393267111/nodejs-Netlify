const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();
app.use(cors());
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

router.get("/test", (req, res) => {
    res.json({
      hello: "test"
    });
  });

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);