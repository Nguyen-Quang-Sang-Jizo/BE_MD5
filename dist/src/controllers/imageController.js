"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const imageService_1 = __importDefault(require("../service/imageService"));
class ImageController {
    constructor() {
        this.deleteImage = async (req, res) => {
            try {
                let id = req.params.id;
                await this.imageService.deleteImageById(id);
                res.status(200).json('xoa thanh cong');
            }
            catch (e) {
                console.log("error in deleteInmage:", e);
                res.status(400).json({
                    message: 'error in deleteInmage',
                    success: false
                });
            }
        };
        this.deleteOne = async (req, res) => {
            try {
                let id = req.params.id;
                await this.imageService.deleteOneImage(id);
                res.status(200).json('xoa thanh cong');
            }
            finally {
            }
        };
        this.imageService = imageService_1.default;
    }
}
exports.default = new ImageController();
//# sourceMappingURL=imageController.js.map