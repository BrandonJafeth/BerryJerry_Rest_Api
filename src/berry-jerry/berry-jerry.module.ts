import { Module } from '@nestjs/common';
import { BerryJerryService } from './berry-jerry.service';
import { BerryJerryController } from './berry-jerry.controller';
import { BerryJerry } from './entities/berry-jerry.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([BerryJerry])],
  controllers: [BerryJerryController],
  providers: [BerryJerryService],
})
export class BerryJerryModule {}
