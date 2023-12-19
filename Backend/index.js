const express = require("express");
const bodyParser = require("body-parser");
const rutas = require("./routes/routes.js");
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://shoppingcart:kPbvbpAXcFMsezkE@shoppingcart.jd7punl.mongodb.net/?retryWrites=true&w=majority";
const app = express();
const port = 3333;

// Configuración de Winston
// const logger = winston.createLogger({
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.Http({
//       host: "logstash",
//       port: 9600, // Puerto de Logstash
//       path: "/", // Ruta de entrada de Logstash
//       ssl: false,
//     }),
//   ],
// });

// app.use((req, res, next) => {
//   logger.info(`${req.method} ${req.url}`);
//   next();
// });

app.use(express.json());

app.use("/api", rutas);

app.get("/", (req, res) => {
  res.send("API Menu Working ");
});

mongoose.set("strictQuery", false);

mongoose
  .connect(uri)

  .then(() => {
    console.log("connected to MongoDB atlas");
  });
//.catch((error) => console.error(error));

app.listen(port, () => {
  console.log("server listing on port", port);
});
