import { Module } from '@nestjs/common';
import { FooterInfoService } from './footer-info.service';
import { FooterInfoController } from './footer-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FooterInfo } from './entities/footer-info.entity';

@Module({
  imports:[TypeOrmModule.forFeature([FooterInfo])],
  controllers: [FooterInfoController],
  providers: [FooterInfoService],
})
export class FooterInfoModule {}
