"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = exports.connectDB = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "module5",
    synchronize: true,
    entities: ["./dist/src/models/*.js"],
});
exports.AppDataSource = AppDataSource;
async function connectDB() {
    try {
        let connect = await AppDataSource.initialize();
        if (connect) {
            console.log("Connect DB successfully");
        }
        else {
            console.log("Database connect error");
        }
    }
    catch (error) {
        console.log(error);
    }
}
exports.connectDB = connectDB;
//# sourceMappingURL=data-source.js.map