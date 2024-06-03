import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleService } from './services/sales.service';
import { SaleController } from './controllers/sales.controller';
import { Sale } from './entities/sale.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sale])],
  controllers: [SaleController],
  providers: [SaleService],
})
export class SaleModule {}
