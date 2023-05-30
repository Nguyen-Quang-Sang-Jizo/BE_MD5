"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentControllers_1 = __importDefault(require("../controllers/commentControllers"));
const commentRouter = (0, express_1.Router)();
commentRouter.get('/', commentControllers_1.default.showAll);
commentRouter.post('/:postId', commentControllers_1.default.addComments);
commentRouter.get('/:id', commentControllers_1.default.showComment);
commentRouter.delete('/:id', commentControllers_1.default.removeComment);
commentRouter.get('/find/:id', commentControllers_1.default.findIdComments);
commentRouter.put('/:id', commentControllers_1.default.editComment);
exports.default = commentRouter;
//# sourceMappingURL=commentRouter.js.map