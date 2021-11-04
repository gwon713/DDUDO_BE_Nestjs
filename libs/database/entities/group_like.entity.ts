import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('group_like')
export class DdudoGroupLikeEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  user_id: string;

  @Column()
  group_id: string;
}
