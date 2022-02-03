import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DdudoUserEntity } from './entities/user.entity';
import { DdudoGroupEntity } from './entities/group.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { DdudoCodeDetailEntity } from './entities/code_detail.entity';
import { DdudoCodeEntity } from './entities/code.entity';
import { DdudoGroupLikeEntity } from './entities/group_like.entity';
import { join } from 'path';
import { DdudoConfigService } from '../common/config/ddudo-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `./env/${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (
        config: DdudoConfigService,
      ): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions => ({
        type: 'postgres',
        host: config.dbHost,
        port: config.dbPort,
        username: config.dbUser,
        password: config.dbPassword,
        database: config.dbDatabase,
        keepConnectionAlive: true,
        entities: [
          DdudoUserEntity,
          DdudoGroupEntity,
          DdudoGroupLikeEntity,
          DdudoCodeEntity,
          DdudoCodeDetailEntity,
        ],
        migrations: [],
        subscribers: [],
        synchronize: true,
        extra: {
          max: 5,
          maxUses: 5000,
          connectionTimeoutMillis: 5000,
          idleTimeoutMillis: 1000,
        },
      }),
      inject: [DdudoConfigService],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), './schema.gql'),
      sortSchema: true,
    }),
  ],
})
export class DatabaseModule {}
