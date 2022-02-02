import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DdudoConfigService } from './ddudo-config.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      ignoreEnvFile: false,
      envFilePath: `./env/${process.env.NODE_ENV}.env`,
    }),
  ],
  providers: [ConfigService, DdudoConfigService],
  exports: [ConfigService, DdudoConfigService],
})
export class DdudoConfigModule {}
