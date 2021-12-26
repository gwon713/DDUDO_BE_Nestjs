import { DdudoUserEntity } from './user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('group_like')
export class DdudoGroupLikeEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
    comment: '',
  })
  id: string;

  @Column({
    name: 'hashtag',
    comment: '',
  })
  groupId: string;

  @ManyToOne(() => DdudoUserEntity, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
  })
  userId: Promise<DdudoUserEntity>;
}
