import {Category} from "../models/Category";
import {AppDataSource} from "../configs/data-source";
import {Like} from "typeorm";

class CategoryService{
    private categoryRepository;
    constructor() {
        this.categoryRepository = AppDataSource.getRepository(Category);
    }

    getAll = async () => {
        let categories = await this.categoryRepository.find();
        return categories;
    }



}

export default new CategoryService();