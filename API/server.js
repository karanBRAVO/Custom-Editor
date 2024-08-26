import express from "express";
import { config } from "dotenv";
import cors from "cors";

config();

const app = express();
const PORT = process.env.PORT || 9900;

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Hello, from API.");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error occurred while starting server: ${err}`);
    return false;
  }
  console.log(`Server started at ${PORT}`);
  return true;
});
