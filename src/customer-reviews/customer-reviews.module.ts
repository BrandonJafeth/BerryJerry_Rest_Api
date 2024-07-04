import { Module } from '@nestjs/common';
import { CustomerReviewsService } from './customer-reviews.service';
import { CustomerReviewsController } from './customer-reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerReview } from './entities/customer-review.entity';

@Module({
  imports:[(TypeOrmModule.forFeature([CustomerReview]))],
  controllers: [CustomerReviewsController],
  providers: [CustomerReviewsService],
})
export class CustomerReviewsModule {}
