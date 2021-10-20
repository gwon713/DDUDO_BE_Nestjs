import logger from '../../config/logger';
export class GroupLike {
    private seq : Number;
    private user_seq : Number;
    private group_seq : Number;

    constructor(seq: Number, user_seq: Number, group_seq: Number) {
        this.seq = seq
        this.user_seq = user_seq
        this.group_seq = group_seq
    }

    public getSeq(): Number {
        return this.seq;
    }

    public setSeq(seq: Number): void {
        this.seq = seq;
    }

    public getUser_seq(): Number {
        return this.user_seq;
    }

    public setUser_seq(user_seq: Number): void {
        this.user_seq = user_seq;
    }

    public getGroup_seq(): Number {
        return this.group_seq;
    }

    public setGroup_seq(group_seq: Number): void {
        this.group_seq = group_seq;
    }

    printInfoGroup = (): void => {
        logger.info({
            group_liked_seq : this.seq,
            user_seq : this.user_seq,
            group_seq : this.group_seq
        });
    }
}