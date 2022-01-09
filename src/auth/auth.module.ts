import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from 'libs/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DdudoUserRepository } from 'libs/database/repositories';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.secret,
      signOptions: { expiresIn: '60s' },
    }),
    DatabaseModule,
    // TypeOrmModule.forFeature([DdudoUserRepository]),
  ],
  providers: [AuthService],
})
export class AuthModule {}
