import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerReviewsService } from './customer-reviews.service';
import { CreateCustomerReviewDto } from './dto/create-customer-review.dto';
import { UpdateCustomerReviewDto } from './dto/update-customer-review.dto';

@Controller('reviews')
export class CustomerReviewsController {
  constructor(private readonly customerReviewsService: CustomerReviewsService) {}

  @Post()
  create(@Body() createCustomerReviewDto: CreateCustomerReviewDto) {
    return this.customerReviewsService.create(createCustomerReviewDto);
  }

  @Get()
  findAll() {
    return this.customerReviewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerReviewsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerReviewsService.remove(+id);
  }
}
