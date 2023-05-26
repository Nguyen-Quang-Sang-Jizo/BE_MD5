"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comment_controllers_1 = __importDefault(require("../controllers/comment.controllers"));
const commentRouter = (0, express_1.Router)();
commentRouter.post('/', comment_controllers_1.default.addComments);
commentRouter.get('/:id', comment_controllers_1.default.showComment);
commentRouter.delete('/:id', comment_controllers_1.default.removeComment);
commentRouter.get('/find/:id', comment_controllers_1.default.findIdComments);
commentRouter.put('/:id', comment_controllers_1.default.editComment);
exports.default = commentRouter;
//# sourceMappingURL=commentRouter.js.map