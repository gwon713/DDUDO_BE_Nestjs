import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DdudoConfigService {
  constructor(private readonly config: ConfigService) {}
  get dbHost(): string {
    return this.config.get<string>('PG_HOST', 'localhost');
  }

  get jwtSecret(): string {
    return this.config.get<string>('JWT_SECRET', 'ddudo_jwt_secret');
  }
}
