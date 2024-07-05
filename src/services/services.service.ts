import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './entities/service.entity';

@Injectable()
export class ServicesService {


  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>
  ){}

  create(createServiceDto: CreateServiceDto) {
    const addedService = this.serviceRepository.create(createServiceDto);
    this.serviceRepository.save(addedService);
    return addedService;
  }
  
  findAll() {
    return this.serviceRepository.find();
  }
  
  findOne(id: number) {
    return this.serviceRepository.findOneBy({id});
  }
  
  async update(id: number, updateServiceDto: UpdateServiceDto) {
    const updatedService = await this.serviceRepository.update({id}, updateServiceDto);
    return updatedService;
  }
  
  remove(id: number) {
    return this.serviceRepository.delete(id);
  }
}
