import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DdudoUser } from 'libs/common/models/user';
import { DdudoUserEntity } from 'libs/database/entities';
import { DdudoUserRepository } from 'libs/database/repositories';
import { AuthService } from 'src/auth/auth.service';
import { Connection, EntityManager, QueryBuilder } from 'typeorm';
import { DdudoUserSignUpInput } from 'libs/common/dto';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(DdudoUserRepository)
    private readonly ddudoUserRepository: DdudoUserRepository,
    private readonly authService: AuthService,
    private readonly connection: Connection,
  ) {
    const logger = new Logger(UserService.name);
  }

  getHealth(): string {
    return 'user health';
  }

  async userLogin(email: string): Promise<any> {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const user: DdudoUserEntity = await this.ddudoUserRepository.findOne({
        email: email,
      });
      if (user) {
        await queryRunner.commitTransaction();
        return await this.authService.creatAccessToken(user);
      } else {
        throw new HttpException('FORBIDDEN_USER', HttpStatus.FORBIDDEN);
      }
    } catch (err) {
      throw new HttpException(
        'INTERNAL_SERVER_ERROR',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
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

  async userSignUp(input: DdudoUserSignUpInput): Promise<string> {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const user = this.ddudoUserRepository.save(
        this.ddudoUserRepository.create({
          email: input.email,
        }),
      );
      await queryRunner.commitTransaction();
      return 'success';
    } catch (err) {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }
  }

  userGetProfile(): string {
    return 'user get profile';
  }

  userEditProfile(): string {
    return 'user edit profile';
  }
}
