import { EntityRepository, Repository } from 'typeorm';
import { DdudoCodeDetailEntity } from '../entities/code_detail.entity';

@EntityRepository(DdudoCodeDetailEntity)
export class DdudoCodeDetailRepository extends Repository<DdudoCodeDetailEntity> {}
