import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FooterInfoService } from './footer-info.service';
import { CreateFooterInfoDto } from './dto/create-footer-info.dto';
import { UpdateFooterInfoDto } from './dto/update-footer-info.dto';

@Controller('footer')
export class FooterInfoController {
  constructor(private readonly footerInfoService: FooterInfoService) {}

  @Post()
  create(@Body() createFooterInfoDto: CreateFooterInfoDto) {
    return this.footerInfoService.create(createFooterInfoDto);
  }

  @Get()
  findAll() {
    return this.footerInfoService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFooterInfoDto: UpdateFooterInfoDto) {
    return this.footerInfoService.update(+id, updateFooterInfoDto);
  }
}
