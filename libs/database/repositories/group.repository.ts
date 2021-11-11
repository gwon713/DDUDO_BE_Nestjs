import { EntityRepository, Repository } from 'typeorm';
import { DdudoGroupEntity } from '../entities/group.entity';

@EntityRepository(DdudoGroupEntity)
export class DdudoGroupRepository extends Repository<DdudoGroupEntity> {}
