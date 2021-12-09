import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('code_detail')
export class DdudoCodeDetailEntity extends BaseEntity {
  @Column()
  code_id: string;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  etc: string;

  @Column()
  use_at: string;
}
