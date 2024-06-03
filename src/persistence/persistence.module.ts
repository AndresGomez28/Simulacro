import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import dbConfig from "./db-config";

@Module({
    imports:[
        ConfigModule.forRoot({
            isGlobal: true,
            load:[dbConfig],
        }),
    ],
})
export class PersistenceModule{}