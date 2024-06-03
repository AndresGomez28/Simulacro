import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Book } from "./entities/book.entity";
import { BooksController } from "./controllers/books.controller";
import { BooksService } from "./services/books.service";

@Module({
    imports: [TypeOrmModule.forFeature([Book])],
    controllers: [BooksController],
    providers: [BooksService],
})
export class BooksModule{}