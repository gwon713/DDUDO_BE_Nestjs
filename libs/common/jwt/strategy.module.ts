import { DdudoConfigService } from 'libs/common/config/ddudo-config.service';
import { DdudoConfigModule } from 'libs/common/config/ddudo-config.module';

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { JwtStrategy } from './jwt.strategy';

/**
 * @TODO check
 */

@Module({
  imports: [
    PassportModule.register({ defatulStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [DdudoConfigModule],
      useFactory: async (config: DdudoConfigService) => ({
        secret: config.jwtSecret,
      }),
      inject: [DdudoConfigModule],
    }),
  ],
  providers: [JwtStrategy],
})
export class StrategyModule {}
