import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import authRouter from "./router/authRouter.js";
import checkoutRouter from "./router/checkoutRouter.js";
import messageRouter from "./router/messageRouter.js";

const app = express();
dotenv.config({ path: "./.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", messageRouter);
app.use("/api/v1", checkoutRouter);
app.use("/api/v1/auth", authRouter);

dbConnection();

export default app;
