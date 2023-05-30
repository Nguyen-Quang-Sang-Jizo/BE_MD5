"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const likeController_1 = __importDefault(require("../controllers/likeController"));
const auth_1 = require("../middleware/auth");
const likeRouter = (0, express_1.Router)();
likeRouter.get('/', likeController_1.default.getAll);
likeRouter.post('/', likeController_1.default.addLike);
likeRouter.get('/:id', auth_1.auth, likeController_1.default.detailLike);
likeRouter.delete('/:id', auth_1.auth, likeController_1.default.deleteLike);
exports.default = likeRouter;
//# sourceMappingURL=likeRouter.js.map