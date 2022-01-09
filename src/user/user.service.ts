import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DdudoUser } from 'libs/common/models/user';
import { DdudoUserEntity } from 'libs/database/entities';
import { DdudoUserRepository } from 'libs/database/repositories';
import { Connection, EntityManager, QueryBuilder } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(DdudoUserRepository)
    private readonly ddudoUserRepository: DdudoUserRepository,
    private readonly connection: Connection,
  ) {
    const logger = new Logger(UserService.name);
  }

  getHealth(): string {
    return 'user health';
  }

  async userLogin(email: string): Promise<DdudoUserEntity> {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const user = this.ddudoUserRepository.findOne({ email: email });
      await queryRunner.commitTransaction();
      return user;
    } catch (err) {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }
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
