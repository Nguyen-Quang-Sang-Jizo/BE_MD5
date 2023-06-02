import "reflect-metadata";
import { DataSource } from "typeorm";
declare const AppDataSource: DataSource;
declare function connectDB(): Promise<void>;
export { connectDB, AppDataSource };
