
import { Module } from '@nestjs/common';
import { FrutasModule } from './frutas/frutas.module';


@Module({
  imports: [FrutasModule],
})
export class AppModule {}
