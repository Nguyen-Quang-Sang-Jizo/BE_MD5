import "reflect-metadata";

import {DataSource} from "typeorm";



const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "module5",
    synchronize: true,
    entities: ["./dist/src/models/*.js"],
});

async function connectDB(){
    try{
        let connect = await AppDataSource.initialize();
        if(connect){
            console.log("Connect DB successfully");
        }else {
            console.log("Database connect error");
        }
    }catch (error){
        console.log(error)
    }
}

export {connectDB, AppDataSource}