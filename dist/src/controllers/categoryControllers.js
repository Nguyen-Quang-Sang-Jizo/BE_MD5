"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoryService_1 = __importDefault(require("../service/categoryService"));
class PostController {
    constructor() {
        this.findAllCategory = async (req, res) => {
            try {
                let listCategory = await this.categoryService.getAll();
                res.status(200).json({
                    data: listCategory,
                    success: true
                });
            }
            catch (e) {
                console.log("error in find all category", e);
                res.status(500).json({
                    message: 'get all category failed',
                    success: false
                });
            }
        };
        this.categoryService = categoryService_1.default;
    }
}
exports.default = new PostController();
//# sourceMappingURL=categoryControllers.js.map