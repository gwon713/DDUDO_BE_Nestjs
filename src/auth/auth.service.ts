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

  async encrypt() {
    const iv = randomBytes(16);
    const password = 'Password used to generate key';

    // The key length is dependent on the algorithm.
    // In this case for aes256, it is 32 bytes.
    const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
    const cipher = createCipheriv('aes-256-ctr', key, iv);

    const textToEncrypt = 'Nest';
    const encryptedText = Buffer.concat([
      cipher.update(textToEncrypt),
      cipher.final(),
    ]);
  }
}
