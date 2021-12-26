import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('code')
export class DdudoCodeEntity extends BaseEntity {
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
