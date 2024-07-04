import { Injectable } from '@nestjs/common';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gallery } from './entities/gallery.entity';

@Injectable()
export class GalleryService {


  constructor(
    @InjectRepository(Gallery)
    private GalleryRepository: Repository<Gallery>
  ){}
  
  create(createGalleryDto: CreateGalleryDto) {
    const addedGallery = this.GalleryRepository.create(createGalleryDto);
    this.GalleryRepository.save(addedGallery);
    return addedGallery;
  }

  findAll() {
    return this.GalleryRepository.find();
  }

  findOne(id: number) {
    return this.GalleryRepository.findOneBy({id});
  }

  async update(id: number, updateGalleryDto: UpdateGalleryDto) {
    const updatedGallery = await this.GalleryRepository.update({id},updateGalleryDto);
    return updatedGallery;
  }

  remove(id: number) {
    return this.GalleryRepository.delete(id);
  }
}



