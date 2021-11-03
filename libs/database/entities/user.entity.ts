import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
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
}
