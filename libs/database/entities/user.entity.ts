import { DdudoGroupLikeEntity } from './group_like.entity';
import { DdudoGroupEntity } from './group.entity';
import { DdudoUserType, DdudoUserSocialType } from 'libs/common/constant';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class DdudoUserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
    comment: '',
  })
  id: string;

  @Column({
    name: 'email',
    comment: '',
  })
  email: string;

  @Column({
    name: 'nickname',
    comment: '',
  })
  nickName: string;

  @Column({
    name: 'password',
    comment: '',
  })
  password: string;

  @Column({
    name: 'social',
    comment: '',
  })
  social: DdudoUserSocialType;

  @Column({
    name: 'file',
    comment: '',
  })
  file: string;

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

  @Column({
    name: 'last_login_at',
    type: 'timestamp',
  })
  lastLoginAt: string;

  @Column({
    name: 'state',
    comment: '',
  })
  state: DdudoUserType;

  @OneToMany(() => DdudoGroupEntity, (group) => group.userId)
  group: DdudoGroupEntity;

  @OneToMany(() => DdudoGroupLikeEntity, (group_like) => group_like.userId)
  group_like: DdudoGroupLikeEntity;
}
