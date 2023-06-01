"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const friendController_1 = __importDefault(require("../controllers/friendController"));
const friendRouter = (0, express_1.Router)();
friendRouter.get('/', auth_1.auth, friendController_1.default.getMany);
friendRouter.post('/', auth_1.auth, friendController_1.default.newFriend);
exports.default = friendRouter;
//# sourceMappingURL=friendRouter.js.map