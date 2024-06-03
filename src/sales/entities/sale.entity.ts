import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Book } from 'src/books/entities/book.entity';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Book)
  book: Book;

  @Column()
  customer: string;

  @Column()
  saleDate: Date;
}
