import { Module } from '@nestjs/common';
import { DdudoConfigModule } from './config/ddudo-config.module';

@Module({
  imports: [DdudoConfigModule],
})
export class CommonModule {}
