import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'libs/database/database.module';
import { DdudoGroupRepository } from 'libs/database/repositories';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([DdudoGroupRepository])],
  controllers: [GroupController],
  providers: [GroupService],
})
export class GroupModule {}
