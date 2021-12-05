import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DdudoUserEntity } from './entities/user.entity';
import { DdudoGroupEntity } from './entities/group.entity';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `./env/${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT),
      username: process.env.PG_USER,
      database: process.env.PG_DATABASE,
      password: process.env.PG_PASSWORD,
      entities: [DdudoUserEntity, DdudoGroupEntity],
      synchronize: true,
    }),
    GraphQLModule.forRoot({}),
  ],
})
export class DatabaseModule {}
