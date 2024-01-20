import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import appRoute from "./routes/appRoute.js";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Aplicatie gestiune studenti");
});

app.use(express.json());
app.use("/stud", appRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Conectat la baza de date");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
