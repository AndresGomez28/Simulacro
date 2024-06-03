import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from '../entities/sale.entity';
import { CreateSaleDto } from '../dtos/create-sale.dto';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private saleRepository: Repository<Sale>,
  ) {}

  createSale(createSaleDto: CreateSaleDto): Promise<Sale> {
    const sale = this.saleRepository.create(createSaleDto);
    return this.saleRepository.save(sale);
  }

  findAllSales(): Promise<Sale[]> {
    return this.saleRepository.find({ relations: ['book'] });
  }

  findOneSle(id: number): Promise<Sale> {
    return this.saleRepository.findOne(id, { relations: ['book'] });
  }

  async deleteSale(id: number): Promise<void> {
    await this.saleRepository.delete(id);
  }
}
