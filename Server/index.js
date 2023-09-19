const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios")
require("dotenv").config();
const port = 8000;
const connectToMongoDB = require("./db");

const { MONGOURI } = process.env;

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

app.get("/capsules", async (req, res) => {
  try {
    const response = await axios.get("https://api.spacexdata.com/v3/capsules");
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching capsules from SpaceX:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

connectToMongoDB(MONGOURI).then(() => {
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
