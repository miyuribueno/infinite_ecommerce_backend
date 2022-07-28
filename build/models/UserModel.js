"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var UserSchema = new Schema({
    name: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    address: {
        type: String,
        required: false,
    },
    age: {
        type: Number,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
});
var UserModel = mongoose_1.default.model("User", UserSchema);
exports.default = UserModel;
