import { DdudoUserEntity } from './user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DdudoGroupType } from 'libs/common/constant';

@Entity('group')
export class DdudoGroupEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => DdudoUserEntity, (user_id) => user_id.group)
  user_id: DdudoUserEntity;

  @Column()
  name: string;

  @Column()
  kind: string;

  @Column()
  status: boolean;

  @Column()
  liked: number;

  @Column()
  start_date: string;

  @Column()
  place: string;

  @Column()
  chat_link: string;

  @Column()
  total_user: number;

  @Column()
  join_user: number;

  @Column()
  about: string;

  @Column()
  hashtag: string;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updated_at: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  created_at: string;

  @Column()
  state: DdudoGroupType;
}
