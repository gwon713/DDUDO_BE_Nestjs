import { DdudoUserEntity } from './user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('group_like')
export class DdudoGroupLikeEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => DdudoUserEntity, (user_id) => user_id.group_like)
  user_id: DdudoUserEntity;

  @Column()
  group_id: string;
}
