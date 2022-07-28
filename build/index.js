"use strict";
// Required external modules
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var loginRoutes_1 = require("./routes/loginRoutes");
var AppRouter_1 = require("./AppRouter");
require("./controllers/LoginContorller");
dotenv_1.default.config();
// App variables
if (!process.env.PORT)
    process.exit(1);
var PORT = process.env.PORT || 8080;
var app = (0, express_1.default)();
// App configuration
app.use(express_1.default.json());
app.use((0, cookie_session_1.default)({ keys: ["Infinite_eComm"] }));
app.use((0, cors_1.default)());
app.use(loginRoutes_1.router);
app.use(AppRouter_1.AppRouter.getInstance());
// Server activation
app.listen(PORT, function () {
    return console.log("Infinite Ecommerce app is listening on port ".concat(PORT));
});
