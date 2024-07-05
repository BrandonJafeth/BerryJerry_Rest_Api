import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BerryJerryService } from './berry-jerry.service';
import { CreateBerryJerryDto } from './dto/create-berry-jerry.dto';
import { UpdateBerryJerryDto } from './dto/update-berry-jerry.dto';

@Controller('berry-jerry')
export class BerryJerryController {
  constructor(private readonly berryJerryService: BerryJerryService) {}

  @Post()
  create(@Body() createBerryJerryDto: CreateBerryJerryDto) {
    return this.berryJerryService.create(createBerryJerryDto);
  }

  @Get()
  findAll() {
    return this.berryJerryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.berryJerryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBerryJerryDto: UpdateBerryJerryDto) {
    return this.berryJerryService.update(+id, updateBerryJerryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.berryJerryService.remove(+id);
  }
}
