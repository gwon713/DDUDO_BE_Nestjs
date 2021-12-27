import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('code_detail')
export class DdudoCodeDetailEntity extends BaseEntity {
  @Column()
  codeId: string;

  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
    comment: '',
  })
  id: string;

  @Column({
    name: 'name',
    comment: '',
  })
  name: string;

  @Column({
    name: 'etc',
    comment: '',
  })
  etc: string;

  @Column({
    name: 'use_at',
    comment: '',
  })
  useAt: boolean;
}
