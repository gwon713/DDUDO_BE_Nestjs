import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DdudoUserEntity } from 'libs/database/entities';
import { DdudoUserRepository } from 'libs/database/repositories';
import { AuthService } from 'src/auth/auth.service';
import { Connection } from 'typeorm';
import { DdudoUserSignUpInput } from 'libs/common/dto';

@Injectable()
export class UserService {
  logger: Logger;
  constructor(
    @InjectRepository(DdudoUserRepository)
    private readonly ddudoUserRepository: DdudoUserRepository,
    private readonly authService: AuthService,
    private readonly connection: Connection,
  ) {
    this.logger = new Logger(UserService.name);
  }

  getHealth(): string {
    return 'user health';
  }

  async userLogin(email: string): Promise<any> {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      this.logger.debug(email);
      const user: DdudoUserEntity = await this.ddudoUserRepository.findOne({
        email: email,
      });
      this.logger.debug(user);
      if (user) {
        await queryRunner.commitTransaction();
        return await this.authService.creatAccessToken(user);
      } else {
        throw new HttpException('FORBIDDEN_USER', HttpStatus.FORBIDDEN);
      }
    } catch (err) {
      await queryRunner.rollbackTransaction();
      this.logger.error(err);
      throw new HttpException(
        'INTERNAL_SERVER_ERROR',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    } finally {
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
      this.logger.debug(input);
      const user = await this.ddudoUserRepository.save(
        this.ddudoUserRepository.create({
          email: input.email,
        }),
      );
      this.logger.debug(user);
      await queryRunner.commitTransaction();
      return user.id;
    } catch (err) {
      this.logger.error(err);
      await queryRunner.rollbackTransaction();
      throw new HttpException(
        'INTERNAL_SERVER_ERROR',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    } finally {
      await queryRunner.release();
    }
  }

  async userGetProfile(email: string): Promise<DdudoUserEntity> {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      this.logger.debug(email);
      const user: DdudoUserEntity = await this.ddudoUserRepository.findOne({
        email: email,
      });
      this.logger.debug(user);
      await queryRunner.commitTransaction();
      return user;
    } catch (err) {
      this.logger.error(err);
      await queryRunner.rollbackTransaction();
      throw new HttpException(
        'INTERNAL_SERVER_ERROR',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    } finally {
      await queryRunner.release();
    }
  }

  userEditProfile(): string {
    return 'user edit profile';
  }
}
