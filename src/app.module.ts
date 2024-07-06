
import { Module } from '@nestjs/common';
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
  imports: [ HeroModule, GalleryModule, CustomerReviewsModule, ServicesModule, FooterInfoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Obando19',
      database: 'berryjerrydb',
      entities: [Hero,Gallery,FooterInfo,CustomerReview,Service],
      autoLoadEntities: true,
      synchronize: true,
    })
],

})
export class AppModule {}
