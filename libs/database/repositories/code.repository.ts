import { EntityRepository, Repository } from 'typeorm';
import { DdudoCodeEntity } from '../entities/code.entity';

@EntityRepository(DdudoCodeEntity)
export class DdudoCodeRepository extends Repository<DdudoCodeEntity> {}
