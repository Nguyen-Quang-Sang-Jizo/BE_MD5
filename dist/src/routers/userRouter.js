"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers_1 = __importDefault(require("../controllers/userControllers"));
const auth_1 = require("../middleware/auth");
const userRouter = express_1.default.Router();
userRouter.get('/', auth_1.auth, userControllers_1.default.findUsers);
userRouter.get('/', auth_1.auth, userControllers_1.default.getMany);
userRouter.post('/register', userControllers_1.default.register);
userRouter.post('/login', userControllers_1.default.login);
userRouter.get('/:id', userControllers_1.default.findUser);
userRouter.put('/:id', userControllers_1.default.personalInformation);
userRouter.delete('/:id', userControllers_1.default.removeUser);
userRouter.delete('/account/:id', userControllers_1.default.deleteUsers);
userRouter.get('/', auth_1.auth, userControllers_1.default.findUsers);
userRouter.get('/:username', userControllers_1.default.findIdUser);
userRouter.get('/search/:name', auth_1.auth, userControllers_1.default.searchUsername);
exports.default = userRouter;
//# sourceMappingURL=userRouter.js.map