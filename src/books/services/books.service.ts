import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Book } from "../entities/book.entity";
import { Repository } from "typeorm";
import { CreateBookDto } from "../dtos/create-book.dto";
import { UpdateBookDto } from "../dtos/update-book.dto";

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private bookRepository: Repository<Book>,
    ) {}

    createBook(createBookDto: CreateBookDto): Promise<Book> {
        const book = this.bookRepository.create(createBookDto);
        return this.bookRepository.save(book);
    }

    findAllBooks(): Promise<Book[]> {
        return this.bookRepository.find({ relations: ['author']});
    }

    findOneBook(id: number): Promise<Book> {
        return this.bookRepository.findOne(id, { relations: ['author'] });
    }

    updateBook(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
        return this.bookRepository.save({ ...updateBookDto, id});
    }

    async deleteBook(id: number): Promise<void> {
        await this.bookRepository.softDelete(id);
    }
}