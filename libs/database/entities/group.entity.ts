import { DdudoUserEntity } from './user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DdudoGroupType } from 'libs/common/constant';

@Entity('group')
export class DdudoGroupEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
    comment: '',
  })
  id: string;

  @Column({
    name: 'user_id',
    comment: '',
  })
  userId: string;

  @Column({
    name: 'name',
    comment: '',
  })
  name: string;

  @Column({
    name: 'kind',
    comment: '',
  })
  kind: string;

  @Column({
    name: 'status',
    comment: '',
  })
  status: boolean;

  @Column({
    name: 'liked',
    comment: '',
  })
  liked: number;

  @Column({
    name: 'start_date',
    comment: '',
  })
  startDate: string;

  @Column({
    name: 'place',
    comment: '',
  })
  place: string;

  @Column({
    name: 'chat_link',
    comment: '',
  })
  chatLink: string;

  @Column({
    name: 'total_user',
    comment: '',
  })
  totalUser: number;

  @Column({
    name: 'join_user',
    comment: '',
  })
  joinUser: number;

  @Column({
    name: 'about',
    comment: '',
  })
  about: string;

  @Column({
    name: 'hashtag',
    comment: '',
  })
  hashtag: string;

  @Column({
    name: 'state',
    comment: '',
  })
  state: DdudoGroupType;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
  })
  updatedAt: string;

  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamp',
  })
  createdAt: string;

  @ManyToOne(() => DdudoUserEntity, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
  })
  user: Promise<DdudoUserEntity>;
}
