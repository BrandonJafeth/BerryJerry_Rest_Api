import { Injectable } from '@nestjs/common';
import { CreateFooterInfoDto } from './dto/create-footer-info.dto';
import { UpdateFooterInfoDto } from './dto/update-footer-info.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FooterInfo } from './entities/footer-info.entity';
import { Repository } from 'typeorm';


@Injectable()
export class FooterInfoService {
  constructor(
    @InjectRepository(FooterInfo)
    private FooterRepository: Repository<FooterInfo>
  ){}

    //Post
  create(createFooterInfoDto: CreateFooterInfoDto) {
    const addFooterInfo = this.FooterRepository.create(createFooterInfoDto);
    this.FooterRepository.save(addFooterInfo);
    return addFooterInfo;
  }

    //Get All
  findAll() {
    return this.FooterRepository.find();
  }

    //Put
  async update(id: number, updateFooterInfoDto: UpdateFooterInfoDto) {
    const UpdateFooterInfo = await this.FooterRepository.update({id}, updateFooterInfoDto);
    return UpdateFooterInfo;
  }
}