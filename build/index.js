"use strict";
// Required external modules
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var db_1 = __importDefault(require("./config/db"));
var AppRouter_1 = require("./AppRouter");
require("./controllers/LoginController");
require("./controllers/RootController");
dotenv_1.default.config();
(0, db_1.default)();
// App variables
if (!process.env.PORT)
    process.exit(1);
var app = (0, express_1.default)();
var PORT = process.env.PORT || 8080;
// App configuration
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(AppRouter_1.AppRouter.getInstance());
// Server activation
app.listen(PORT, function () {
    return console.log("Infinite Ecommerce app is listening on port ".concat(PORT));
});
