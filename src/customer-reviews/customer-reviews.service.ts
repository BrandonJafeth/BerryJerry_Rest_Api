import { Injectable } from '@nestjs/common';
import { CreateCustomerReviewDto } from './dto/create-customer-review.dto';
import { UpdateCustomerReviewDto } from './dto/update-customer-review.dto';
import { CustomerReview } from './entities/customer-review.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CustomerReviewsService {
  constructor(
    @InjectRepository(CustomerReview)
    private CustomerReviewRepository: Repository <CustomerReview>
  ){}

  create(createCustomerReviewDto: CreateCustomerReviewDto) {
    const addCustomerReview = this.CustomerReviewRepository.create(createCustomerReviewDto);
    this.CustomerReviewRepository.save(addCustomerReview);
    return addCustomerReview;
  }

  findAll() {
    return this.CustomerReviewRepository.find();
  }

  findOne(id: number) {
    return this.CustomerReviewRepository.findOneBy({id});
  }

  remove(id: number) {
    return this.CustomerReviewRepository.delete({id});
  }
}
