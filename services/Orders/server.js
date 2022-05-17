const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");
//import routes
const ordersRoute = require('./routes/orders-route');


const app = express();

const apiPort = process.env.PORT || 3004;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use(
  bodyParser.json({
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  res.setHeader("Access-Control-Expose-Headers", "Content-Range");
  res.setHeader("Content-Range", "bytes: 0-10/*");

  next();
});

//routes
app.use('/orders', ordersRoute)

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(apiPort, () => {
  console.log("Listening to port ", apiPort);
});
