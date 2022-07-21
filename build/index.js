"use strict";
// Required external modules
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
// App variables
if (!process.env.PORT)
    process.exit(1);
const PORT = process.env.PORT || 8080;
const app = (0, express_1.default)();
// App configuration
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => res.send("Infinite Ecommerce"));
// Server activation
app.listen(PORT, () => console.log(`Infinite Ecommerce app is listening on port ${PORT}`));
