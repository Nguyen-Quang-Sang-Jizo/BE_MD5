"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postController_1 = __importDefault(require("../controllers/postController"));
const auth_1 = require("../middleware/auth");
const delete_1 = require("../middleware/delete");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)({ dest: 'public/upload/' });
const postRouter = (0, express_1.Router)();
postRouter.get('/', auth_1.auth, postController_1.default.findAll);
postRouter.post('/', auth_1.auth, upload.array('image'), postController_1.default.addPost);
postRouter.get('/my-list', auth_1.auth, postController_1.default.findAllById);
postRouter.put('/:id', auth_1.auth, delete_1.onlyDeleteOwnPost, postController_1.default.editPost);
postRouter.delete('/:id', auth_1.auth, delete_1.onlyDeleteOwnPost, postController_1.default.removePost);
postRouter.get('/admin/:id', delete_1.onlyDeleteOwnPost, postController_1.default.findId);
postRouter.get('/search/:title', postController_1.default.postSearch);
postRouter.get('/classify/:id', postController_1.default.postClassify);
exports.default = postRouter;
//# sourceMappingURL=postRouter.js.map