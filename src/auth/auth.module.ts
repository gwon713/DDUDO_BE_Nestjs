import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from 'libs/database/database.module';
import { UserModule } from '../user/user.module';
import { JwtStrategy } from './jwt.strategy';
@Module({
  imports: [
    UserModule,
    DatabaseModule,
    // TypeOrmModule.forFeature([DdudoUserRepository]),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
