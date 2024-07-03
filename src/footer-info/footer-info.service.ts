import { Injectable } from '@nestjs/common';
import { CreateFooterInfoDto } from './dto/create-footer-info.dto';
import { UpdateFooterInfoDto } from './dto/update-footer-info.dto';

@Injectable()
export class FooterInfoService {
  create(createFooterInfoDto: CreateFooterInfoDto) {
    return 'This action adds a new footerInfo';
  }

  findAll() {
    return `This action returns all footerInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} footerInfo`;
  }

  update(id: number, updateFooterInfoDto: UpdateFooterInfoDto) {
    return `This action updates a #${id} footerInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} footerInfo`;
  }
}
