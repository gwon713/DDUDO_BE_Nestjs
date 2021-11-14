import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('code')
export class DdudoCodeEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  name: string;

  @Column()
  etc: string;

  @Column()
  use_at: boolean;
}
