import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseModule } from 'libs/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DdudoUserRepository } from 'libs/database/repositories';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([DdudoUserRepository])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
