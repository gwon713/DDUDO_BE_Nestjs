import { Injectable, Logger } from '@nestjs/common';
import { DdudoUser } from 'libs/common/models/user';
import { Connection, QueryBuilder } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
  ) {
    this.logger = new Logger(UserService.name);
  }

  getHealth(): string {
    return 'user health';
  }

  async userLogin(): Promise<DdudoUser> {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.commitTransaction();
    } catch (err) {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }
    return;
  }

  userLogOut(): string {
    return 'user logout';
  }

  userGetNickName(): string {
    return 'user get nickname';
  }

  userSignUp(): string {
    return 'user signup';
  }

  userGetProfile(): string {
    return 'user get profile';
  }

  userEditProfile(): string {
    return 'user edit profile';
  }
}
