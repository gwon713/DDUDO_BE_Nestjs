import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `./env/.env.${process.env.NODE_ENV}`
        }),
        TypeOrmModule.forRoot({
            type: "postgres",
            host: process.env.PG_HOST,
            port: parseInt(process.env.PG_PORT),
            username: process.env.PG_USER,
            database: process.env.PG_DATABASE,
            password: process.env.PG_PASSWORD,
            entities: [

            ],
            synchronize: true
        })
    ]
})
export class DatabaseModule {}
