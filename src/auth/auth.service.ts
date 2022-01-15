import { Injectable } from '@nestjs/common';
import { DdudoUser } from 'libs/common/models/user';
import { DdudoUserEntity } from 'libs/database/entities';
import { UserService } from '../user/user.service';
import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(
    email: string,
    password: string,
  ): Promise<DdudoUserEntity> {
    const user = await this.userService.userLogin(email);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  async encrypt(encrypt: string) {
    const iv = randomBytes(16);

    // The key length is dependent on the algorithm.
    // In this case for aes256, it is 32 bytes.
    const key = (await promisify(scrypt)(encrypt, 'salt', 32)) as Buffer;
    const cipher = createCipheriv('aes-256-ctr', key, iv);

    const textToEncrypt = 'Nest';
    return Buffer.concat([cipher.update(textToEncrypt), cipher.final()]);
  }

  async creatAccessToken(user: DdudoUserEntity) {
    const payload = {
      username: user.email,
      sub: user.id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
