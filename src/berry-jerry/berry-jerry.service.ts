import { Injectable } from '@nestjs/common';
import { CreateBerryJerryDto } from './dto/create-berry-jerry.dto';
import { UpdateBerryJerryDto } from './dto/update-berry-jerry.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BerryJerry } from './entities/berry-jerry.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BerryJerryService {
  constructor(
    @InjectRepository(BerryJerry)
    private berryJerryRepository: Repository<BerryJerry>,
  ) {}

  create(createBerryJerryDto: CreateBerryJerryDto) {
    const addedBerryJerry = this.berryJerryRepository.create(createBerryJerryDto);
    this.berryJerryRepository.save(addedBerryJerry);
    return addedBerryJerry;
  }

  findAll() {
    return this.berryJerryRepository.find({ relations: ['gallery', 'service', 'customerreview', 'hero', 'footerinfo'] });
  }

  async findOne(id: number) {
    const berryJerry = await this.berryJerryRepository
      .createQueryBuilder('berryjerry')
      .leftJoinAndSelect('berryjerry.gallery', 'gallery')
      .leftJoinAndSelect('berryjerry.service', 'service')
      .leftJoinAndSelect('berryjerry.hero', 'hero')
      .leftJoinAndSelect('berryjerry.footerinfo', 'footerinfo')
      .leftJoinAndSelect('berryjerry.customerreview', 'customerreview')
      .where('berryjerry.id = :id', { id })
      .getOne();

    if (!berryJerry) {
      throw new Error(`BerryJerry with id ${id} not found`);
    }

    return berryJerry;
  }

  async update(id: number, updateBerryJerryDto: UpdateBerryJerryDto) {
    const updatedBerryJerry = await this.berryJerryRepository.update({ id }, updateBerryJerryDto);
    return updatedBerryJerry;
  }

  remove(id: number) {
    return this.berryJerryRepository.delete(id);
  }
}