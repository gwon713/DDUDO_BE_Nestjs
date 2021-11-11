import { EntityRepository, Repository } from 'typeorm';
import { DdudoGroupLikeEntity } from '../entities/group_like.entity';

@EntityRepository(DdudoGroupLikeEntity)
export class DdudoGroupLikeRepository extends Repository<DdudoGroupLikeEntity> {}
