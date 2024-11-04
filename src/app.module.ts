
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HeroModule } from './hero/hero.module';
import { GalleryModule } from './gallery/gallery.module';
import { CustomerReviewsModule } from './customer-reviews/customer-reviews.module';
import { ServicesModule } from './services/services.module';
import { FooterInfoModule } from './footer-info/footer-info.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hero } from './hero/entities/hero.entity';
import { Gallery } from './gallery/entities/gallery.entity';
import { FooterInfo } from './footer-info/entities/footer-info.entity';
import { CustomerReview } from './customer-reviews/entities/customer-review.entity';
import { Service } from './services/entities/service.entity';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HeroModule,
    GalleryModule,
    CustomerReviewsModule,
    ServicesModule,
    FooterInfoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Hero, Gallery, FooterInfo, CustomerReview, Service],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}