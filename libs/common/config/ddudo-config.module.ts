import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DdudoConfigService } from './ddudo-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `./env/${process.env.NODE_ENV}.env`,
    }),
  ],
  providers: [ConfigService, DdudoConfigService],
  exports: [ConfigService, DdudoConfigService],
})
export class DdudoConfigModule {}
