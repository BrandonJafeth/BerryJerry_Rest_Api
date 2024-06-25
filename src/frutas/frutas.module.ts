import { Module } from '@nestjs/common';
import { FrutasService } from './frutas.service';
import { FrutasController } from './frutas.controller';

@Module({
  controllers: [FrutasController],
  providers: [FrutasService],
})
export class FrutasModule {}
