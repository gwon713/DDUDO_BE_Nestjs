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
import { DdudoFileEntity } from './file.entity';

@Entity('user')
export class DdudoUserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
    comment: 'user id',
  })
  id: string;

  @Column({
    name: 'email',
    comment: 'user email',
    type: 'varchar',
    length: 50,
  })
  email: string;

  @Column({
    name: 'nick_name',
    comment: 'user nickname',
    type: 'varchar',
    length: 50,
  })
  nickName: string;

  @Column({
    name: 'password',
    comment: 'user password',
    type: 'varchar',
    length: 255,
  })
  password: string;

  @Column({
    name: 'social',
    comment: 'user social route',
    type: 'varchar',
    length: 255,
  })
  social: DdudoUserSocialType;

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
  groups: DdudoGroupEntity;

  @OneToMany(() => DdudoGroupLikeEntity, (group_like) => group_like.userId)
  groupLikes: DdudoGroupLikeEntity;

  @OneToMany(() => DdudoFileEntity, (file) => file.userId)
  files: DdudoFileEntity;
}
