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
  uuid: string;

  @ManyToOne(() => DdudoUserEntity, (user) => user.group_like)
  user: DdudoUserEntity;

  @Column()
  group_id: string;
}
