import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { setupSwagger } from 'libs/utils/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  Logger.log('NODE ENV: ' + process.env.NODE_ENV);
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  setupSwagger(app);
  await app.listen(3000);
}
bootstrap();
