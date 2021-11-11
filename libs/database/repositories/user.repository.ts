import { EntityRepository, Repository } from 'typeorm';
import { DdudoUserEntity } from '../entities/user.entity';

@EntityRepository(DdudoUserEntity)
export class DdudoUserRepository extends Repository<DdudoUserEntity> {}
