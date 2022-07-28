"use strict";
// import { Request, Response } from "express";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// class RootController {
//   getRoot(req: Request, res: Response): void {
//     if (req.session) {
//       res.send("You are logged in");
//     } else {
//       res.send("You are not logged in");
//     }
//   }
// }
var classDecorator = function (constructor) {
    console.log(constructor);
};
var testDecorator = function (target, key) {
    console.log("Target: ", target);
    console.log("Key: ", key);
};
var logError = function (errorMessage) {
    return function (target, key, desc) {
        var method = desc.value;
        desc.value = function () {
            try {
                method();
            }
            catch (e) {
                console.log(errorMessage);
            }
        };
    };
};
var Shop = /** @class */ (function () {
    function Shop() {
        this.name = "Infinite";
    }
    Object.defineProperty(Shop.prototype, "shopName", {
        get: function () {
            return "This is ".concat(this.name, " Computer Parts Shop");
        },
        enumerable: false,
        configurable: true
    });
    Shop.prototype.owner = function () {
        throw new Error();
        console.log("Yuri");
    };
    __decorate([
        testDecorator,
        __metadata("design:type", String)
    ], Shop.prototype, "name", void 0);
    __decorate([
        testDecorator,
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], Shop.prototype, "shopName", null);
    __decorate([
        logError("Oops, owner is drunk"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Shop.prototype, "owner", null);
    Shop = __decorate([
        classDecorator
    ], Shop);
    return Shop;
}());
// console.log(new Shop().owner());
// testDecorator(Shop.prototype, "owner");
// To change a prototype, we have to go through propertydescriptor
// decorators doesn't have access to property values
