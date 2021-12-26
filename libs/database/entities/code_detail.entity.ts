import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('code_detail')
export class DdudoCodeDetailEntity extends BaseEntity {
  @Column()
  codeId: string;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  etc: string;

  @Column()
  useAt: boolean;
}
