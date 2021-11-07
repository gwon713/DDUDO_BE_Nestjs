import { DdudoGroupLikeEntity } from './group_like.entity';
import { DdudoGroupEntity } from './group.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
export enum userSocialType {
  KAKAO = 'kakao',
  GOOGLE = 'google',
  GITHUB = 'github',
}
@Entity('user')
export class DdudoUserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  email: string;

  @Column()
  nickname: string;

  @Column()
  token: string;

  @Column()
  social: userSocialType;

  @Column()
  file: string;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updated_at: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  created_at: string;

  @Column({
    type: 'timestamp',
  })
  last_login_at: string;

  @Column()
  deleted: boolean;

  @OneToMany(() => DdudoGroupEntity, (group) => group.user_id)
  group: DdudoGroupEntity;

  @OneToMany(() => DdudoGroupLikeEntity, (group_like) => group_like.user)
  group_like: DdudoGroupLikeEntity;
}
