// Required external modules

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieSession from "cookie-session";
import { router } from "./routes/loginRoutes";
import { AppRouter } from "./AppRouter";
import "./controllers/LoginContorller";

dotenv.config();

// App variables

if (!process.env.PORT) process.exit(1);

const PORT = process.env.PORT || 8080;
const app = express();

// App configuration

app.use(express.json());
app.use(cookieSession({ keys: ["Infinite_eComm"] }));
app.use(cors());
app.use(router);
app.use(AppRouter.getInstance());

// Server activation

app.listen(PORT, () =>
  console.log(`Infinite Ecommerce app is listening on port ${PORT}`)
);
