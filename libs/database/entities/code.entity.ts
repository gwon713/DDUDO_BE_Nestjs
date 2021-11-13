import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('code')
export class DdudoCodeEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  code_name: string;

  @Column()
  code_etc: string;

  @Column()
  use_at: boolean;
}
