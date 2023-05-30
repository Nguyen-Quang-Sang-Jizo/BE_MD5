"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imageController_1 = __importDefault(require("../controllers/imageController"));
const imageRouter = (0, express_1.Router)();
imageRouter.delete('/:id', imageController_1.default.deleteOne);
exports.default = imageRouter;
//# sourceMappingURL=imageRouter.js.map