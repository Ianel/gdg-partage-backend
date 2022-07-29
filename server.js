const express = require("express");
const app = express();

const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: "./config.env" });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 8000;

const sharingRoutes = require("./routes/sharing.routes");

app.use("/api/v1/sharing", sharingRoutes);

app.listen(port, "localhost", () => console.log("Hello World"));
