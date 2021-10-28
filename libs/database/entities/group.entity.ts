import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('group')
export class DdudoGroupEntity extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    user_id: string;

    @Column()
    name: string;

    @Column()
    kind: string;

    @Column()
    status: boolean;

    @Column()
    liked: number;

    @Column()
    start_date: string;

    @Column()
    place: string;

    @Column()
    chat_link: string;

    @Column()
    total_user: number;

    @Column()
    join_user: number;

    @Column()
    about: string;

    @Column()
    hashtag: any;

    @UpdateDateColumn({
        type: 'timestamp'
    })
    updated_at: string;

    @CreateDateColumn({
        type: 'timestamp'
    })
    created_at: string;

    @Column()
    deleted: boolean;
}