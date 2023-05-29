"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postController_1 = __importDefault(require("../controllers/postController"));
const auth_1 = require("../middleware/auth");
const private_1 = require("../middleware/private");
const delete_1 = require("../middleware/delete");
const postRouter = (0, express_1.Router)();
postRouter.use(auth_1.auth);
postRouter.get('/', private_1.privatePost, postController_1.default.findAll);
postRouter.post('/', postController_1.default.addPost);
postRouter.put('/:id', delete_1.onlyDeleteOwnPost, postController_1.default.editPost);
postRouter.delete('/:id', delete_1.onlyDeleteOwnPost, postController_1.default.removePost);
postRouter.get('/:id', delete_1.onlyDeleteOwnPost, postController_1.default.findId);
postRouter.get('/search/:name', postController_1.default.postSearch);
postRouter.get('/classify/:id', postController_1.default.postClassify);
exports.default = postRouter;
//# sourceMappingURL=postRouter.js.map