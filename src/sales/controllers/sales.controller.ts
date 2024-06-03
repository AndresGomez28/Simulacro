import { Controller, Get, Post, Body, Param, Delete, Query } from '@nestjs/common';
import { SaleService } from '../services/sales.service';
import { CreateSaleDto } from '../dtos/create-sale.dto';

@Controller('sales')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Post()
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.saleService.createSale(createSaleDto);
  }

  @Get()
  findAll() {
    return this.saleService.findAllSales();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleService.findOneSle(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleService.deleteSale(+id);
  }
}
