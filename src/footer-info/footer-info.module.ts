import { Module } from '@nestjs/common';
import { FooterInfoService } from './footer-info.service';
import { FooterInfoController } from './footer-info.controller';

@Module({
  controllers: [FooterInfoController],
  providers: [FooterInfoService],
})
export class FooterInfoModule {}
