import { Injectable } from '@nestjs/common';
import { CreateFrutaDto } from './dto/create-fruta.dto';
import { UpdateFrutaDto } from './dto/update-fruta.dto';

@Injectable()
export class FrutasService {
  create(createFrutaDto: CreateFrutaDto) {
    return 'This action adds a new fruta';
  }

  findAll() {
    return `This action returns all frutas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fruta`;
  }

  update(id: number, updateFrutaDto: UpdateFrutaDto) {
    return `This action updates a #${id} fruta`;
  }

  remove(id: number) {
    return `This action removes a #${id} fruta`;
  }
}
