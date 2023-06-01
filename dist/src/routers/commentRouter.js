"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentControllers_1 = __importDefault(require("../controllers/commentControllers"));
const auth_1 = require("../middleware/auth");
const commentRouter = (0, express_1.Router)();
commentRouter.get('/', commentControllers_1.default.showAll);
commentRouter.post('/', auth_1.auth, commentControllers_1.default.createComment);
commentRouter.get('/:id', commentControllers_1.default.showCommentById);
commentRouter.delete('/:id', commentControllers_1.default.removeComment);
commentRouter.put('/:id', commentControllers_1.default.editComment);
exports.default = commentRouter;
//# sourceMappingURL=commentRouter.js.map