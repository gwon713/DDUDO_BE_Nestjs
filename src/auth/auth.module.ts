import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from 'libs/database/database.module';
import { UserModule } from '../user/user.module';
import { JwtStrategy } from './jwt.strategy';
import { DdudoConfigService } from 'libs/common/config/ddudo-config.service';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: DdudoConfigService.jwtSecret,
      signOptions: { expiresIn: '60s' },
    }),
    DatabaseModule,
    // TypeOrmModule.forFeature([DdudoUserRepository]),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
