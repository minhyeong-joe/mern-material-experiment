import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// router imports
import usersRouter from "./routers/users.js";

// server init and configs
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

// middlewares
app.use(bodyParser.json());
app.use(cors());

// DB connection
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.error(err.message);
  });

// use routers
app.use("/users", usersRouter);

// run server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
