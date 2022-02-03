import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DdudoConfigService {
  constructor(private readonly config: ConfigService) {}
  get dbHost(): string {
    return this.config.get<string>('PG_HOST', 'localhost');
  }

  get dbUser(): string {
    return this.config.get<string>('PG_USER', 'admin');
  }

  get dbDatabase(): string {
    return this.config.get<string>('PG_DATABASE', 'ddudo');
  }

  get dbPassword(): string {
    return this.config.get<string>('PG_PASSWORD', 'ddudo123');
  }

  get dbPort(): number {
    return this.config.get<number>('PG_PORT', 5432);
  }

  get jwtSecret(): string {
    return this.config.get<string>('JWT_SECRET', 'ddudo_jwt_secret');
  }
}
