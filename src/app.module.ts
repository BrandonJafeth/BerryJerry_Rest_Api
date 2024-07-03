
import { Module } from '@nestjs/common';
import { FrutasModule } from './frutas/frutas.module';
import { HeroModule } from './hero/hero.module';


@Module({
  imports: [FrutasModule, HeroModule],
})
export class AppModule {}
