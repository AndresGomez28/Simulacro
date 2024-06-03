
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { BooksService } from '../services/books.service';
import { CreateBookDto } from '../dtos/create-book.dto';
import { UpdateBookDto } from '../dtos/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Post('create')
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.createBook(createBookDto);
  }

  @Get('getAll')
  findAll() {
    return this.bookService.findAllBooks();
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOneBook(+id);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.updateBook(+id, updateBookDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.bookService.deleteBook(+id);
  }
}
