const express = require("express");
const db = require("./database/index.js");
const appRoutes = require("./routes/appRoutes");
const PORT = 8800;
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());

app.use(express.static(__dirname + "/../client/dist"));
app.use("/api/users", appRoutes);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
