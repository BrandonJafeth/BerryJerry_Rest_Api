import { Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hero } from './entities/hero.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HeroService {
  constructor(
    @InjectRepository(Hero)
    private heroRepository: Repository<Hero>
  ){}

  create(createHeroDto: CreateHeroDto) {
    const newHero = this.heroRepository.create(createHeroDto);
    this.heroRepository.save(newHero);
    return newHero;
  }

  findAll() {
    return this.heroRepository.find();
  }

  findOne(id: number) {
    return this.heroRepository.findOneBy({id});
  }

  async update(id: number, updateHeroDto: UpdateHeroDto) {
    const updatedHero = await this.heroRepository.update(id, updateHeroDto);
    return updatedHero;
  }

  remove(id: number) {
    return this.heroRepository.delete(id);
  }
}
