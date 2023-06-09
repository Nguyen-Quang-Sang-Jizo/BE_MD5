"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = require("../models/Category");
const data_source_1 = require("../configs/data-source");
class CategoryService {
    constructor() {
        this.getAll = async () => {
            let categories = await this.categoryRepository.find();
            return categories;
        };
        this.categoryRepository = data_source_1.AppDataSource.getRepository(Category_1.Category);
    }
}
exports.default = new CategoryService();
//# sourceMappingURL=categoryService.js.map