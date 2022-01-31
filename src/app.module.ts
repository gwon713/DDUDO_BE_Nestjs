import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GroupModule } from './group/group.module';
import { DatabaseModule } from 'libs/database/database.module';
import { AuthModule } from './auth/auth.module';
import { DdudoConfigModule } from 'libs/common/config/ddudo-config.module';

@Module({
  imports: [
    DdudoConfigModule,
    UserModule,
    GroupModule,
    DatabaseModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
