import { PartialType } from '@nestjs/mapped-types';
import { CreateBerryJerryDto } from './create-berry-jerry.dto';

export class UpdateBerryJerryDto extends PartialType(CreateBerryJerryDto) {}
