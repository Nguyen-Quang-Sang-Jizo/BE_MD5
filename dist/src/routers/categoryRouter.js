"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryControllers_1 = __importDefault(require("../controllers/categoryControllers"));
const categoryRouter = (0, express_1.Router)();
categoryRouter.get('/', categoryControllers_1.default.findAllCategory);
exports.default = categoryRouter;
//# sourceMappingURL=categoryRouter.js.map