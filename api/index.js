
import express  from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.router.js";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
dotenv.config();

mongoose
.connect(process.env.MONGO)
.then(() => {
  console.log("Connected to MongoDB!")
})
.catch((err) => {
  console.log(err);
})

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});

app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)

app.use ((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  });
});