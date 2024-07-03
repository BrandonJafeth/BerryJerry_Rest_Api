
import { Module } from '@nestjs/common';
import { FrutasModule } from './frutas/frutas.module';
import { HeroModule } from './hero/hero.module';
import { GalleryModule } from './gallery/gallery.module';
import { CustomerReviewsModule } from './customer-reviews/customer-reviews.module';
import { ServicesModule } from './services/services.module';
import { FooterInfoModule } from './footer-info/footer-info.module';


@Module({
  imports: [FrutasModule, HeroModule, GalleryModule, CustomerReviewsModule, ServicesModule, FooterInfoModule],
})
export class AppModule {}
