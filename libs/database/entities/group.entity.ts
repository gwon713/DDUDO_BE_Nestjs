import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('group')
export class DdudoGroupEntity extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    uuid: string;
}