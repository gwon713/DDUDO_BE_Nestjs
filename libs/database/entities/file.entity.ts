import { DdudoGroupLikeEntity } from './group_like.entity';
import { DdudoGroupEntity } from './group.entity';
import { DdudoUserType, DdudoUserSocialType } from 'libs/common/constant';
import { DdudoFileType } from '../../common/constant/file_type';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DdudoUserEntity } from './user.entity';

@Entity('file')
export class DdudoFileEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
    comment: 'file id',
  })
  id: string;

  @ManyToOne(() => DdudoUserEntity, (user) => user.files)
  @Column({
    name: 'user_id',
    comment: 'file s3 id',
    type: 'varchar',
  })
  userId: string;

  @Column({
    name: 's3_uri',
    comment: 'file s3 id',
  })
  s3_uri: string;

  @Column({
    name: 'extension',
    comment: 'file extension',
  })
  extension: string;

  @Column({
    name: 'type',
    comment: 'file type',
  })
  type: string;

  @Column({
    name: 'size',
    comment: 'file size',
  })
  size: DdudoUserSocialType;

  @Column({
    name: 'file',
    comment: 'user',
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
    name: 'state',
    comment: '',
  })
  state: DdudoFileType;
}
