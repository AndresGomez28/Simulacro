import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Author } from "../entities/author.entity";
import { CreateAuthorDto } from "../dtos/create-author.dto";
import { UpdateAuthorDto } from '../dtos/update-author.dto';


@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) {}

  createAuthor(createAutorDto: CreateAuthorDto): Promise<Author> {
    const author = this.authorRepository.create(createAutorDto);
    return this.authorRepository.save(author);
  }

  findAllAuthors(): Promise<Author[]> {
    return this.authorRepository.find();
  }

  findOneAuthor(id: number): Promise<Author> {
    return this.authorRepository.findOne(id);
  }

  updateAuthor(id:number, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    return this.authorRepository.save({ ...updateAuthorDto, id});
  }

  async deleteAuthor(id: number): Promise<void> {
    await this.authorRepository.delete(id);
  }

}