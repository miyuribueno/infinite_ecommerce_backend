// Required external modules

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import { AppRouter } from "./AppRouter";
import "./controllers/LoginController";
import "./controllers/RootController";

dotenv.config();
connectDB();

// App variables

if (!process.env.PORT) process.exit(1);

const app = express();
const PORT = process.env.PORT || 8080;

// App configuration

app.use(express.json());
app.use(cors());
app.use(AppRouter.getInstance());

// Server activation

app.listen(PORT, () =>
  console.log(`Infinite Ecommerce app is listening on port ${PORT}`)
);
