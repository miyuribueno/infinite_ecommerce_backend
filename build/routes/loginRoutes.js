"use strict";
// Required external modules
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
// App variables
var router = (0, express_1.Router)();
exports.router = router;
// GET
router.get("/", function (req, res) {
    res.send("Infinite Ecommerce App");
});
