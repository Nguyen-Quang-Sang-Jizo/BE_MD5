"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRole = void 0;
const checkRole = (req, res, next) => {
    if (req.decode.role === 'admin')
        return next();
    else {
        res.json('ban khong co quyen');
    }
};
exports.checkRole = checkRole;
//# sourceMappingURL=author.js.map