import { PartialType } from '@nestjs/mapped-types';
import { CreateFooterInfoDto } from './create-footer-info.dto';

export class UpdateFooterInfoDto extends PartialType(CreateFooterInfoDto) {}
