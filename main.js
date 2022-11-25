import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import { CustomerRouter } from "./routers/customer-router.js";
import bodyParser from "body-parser";

mongoose.connect("mongodb://localhost:27017/BadBanking", () => {
  console.log('MongoDB connected');
});

const app = express();
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

app.use("/api", CustomerRouter);

const notFound = (req, res) => {
  res.status(404);
  res.json({
    status: 404,
    error: "not found",
  });
};

const handleError = (error, req, res) => {
  console.log(error);
  res.status(error.status || 500);
  res.json({
    message: error.message || "failed: Unknown error",
    msg: error.msg,
    stack: error.stack,
  });
};
app.use(notFound);
app.use(handleError);

const PORT = 3000;
app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server started on port: ${PORT}`);
});
