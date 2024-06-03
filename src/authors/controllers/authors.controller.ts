import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AuthorService } from '../services/autors.service';
import { CreateAuthorDto } from '../dtos/create-author.dto';
import { UpdateAuthorDto } from '../dtos/update-author.dto';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.createAuthor(createAuthorDto);
  }

  @Get()
  findAll() {
    return this.authorService.findAllAuthors();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorService.findOneAuthor(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorService.updateAuthor(+id, updateAuthorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorService.deleteAuthor(+id);
  }
}
