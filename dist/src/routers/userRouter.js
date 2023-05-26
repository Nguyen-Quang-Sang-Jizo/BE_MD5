"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controllers_1 = __importDefault(require("../controllers/user.controllers"));
const auth_1 = require("../middleware/auth");
const author_1 = require("../middleware/author");
const userRouter = express_1.default.Router();
userRouter.get('/', auth_1.auth, author_1.checkRole, user_controllers_1.default.findUsers);
userRouter.post('/register', user_controllers_1.default.register);
userRouter.post('/login', user_controllers_1.default.login);
userRouter.get('/:username', user_controllers_1.default.findIdUser);
userRouter.get('/update/:id', user_controllers_1.default.findUser);
userRouter.delete('/:id', user_controllers_1.default.removeUser);
userRouter.delete('/account/:id', user_controllers_1.default.deleteUsers);
userRouter.put('/:id', user_controllers_1.default.personalInformation);
userRouter.get('/search/:name', auth_1.auth, author_1.checkRole, user_controllers_1.default.searchUsername);
exports.default = userRouter;
//# sourceMappingURL=userRouter.js.map