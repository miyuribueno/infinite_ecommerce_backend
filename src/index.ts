// Required external modules

import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

// App variables

if (!process.env.PORT) process.exit(1);

const PORT = process.env.PORT || 8080;
const app = express();

// App configuration

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Infinite Ecommerce"));

// Server activation

app.listen(PORT, () =>
  console.log(`Infinite Ecommerce app is listening on port ${PORT}`)
);
