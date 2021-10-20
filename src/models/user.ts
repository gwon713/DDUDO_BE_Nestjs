import logger from '../config/logger';
export class User {
    private seq : Number;
    private email : String;
    private nickname : String;
    private token : String;
    private social : String;
    private file : String;
    private login_time : String;
    private edit_time : String;
    private join_time : String;
    private deleted : Boolean;

    constructor(
        seq: Number, 
        email: String, 
        nickname: String, 
        token: String, 
        social: String, 
        file: String, 
        login_time: String, 
        edit_time: String, 
        join_time: String, 
        deleted: Boolean
    )
    {
        this.seq = seq
        this.email = email
        this.nickname = nickname
        this.token = token
        this.social = social
        this.file = file
        this.login_time = login_time
        this.edit_time = edit_time
        this.join_time = join_time
        this.deleted = deleted
    }

    public getSeq(): Number {
        return this.seq;
    }

    public setSeq(seq: Number): void {
        this.seq = seq;
    }

    public getEmail(): String {
        return this.email;
    }

    public setEmail(email: String): void {
        this.email = email;
    }

    public getNickname(): String {
        return this.nickname;
    }

    public setNickname(nickname: String): void {
        this.nickname = nickname;
    }

    public getToken(): String {
        return this.token;
    }

    public setToken(token: String): void {
        this.token = token;
    }

    public getSocial(): String {
        return this.social;
    }

    public setSocial(social: String): void {
        this.social = social;
    }

    public getFile(): String {
        return this.file;
    }

    public setFile(file: String): void {
        this.file = file;
    }

    public getLogin_time(): String {
        return this.login_time;
    }

    public setLogin_time(login_time: String): void {
        this.login_time = login_time;
    }

    public getEdit_time(): String {
        return this.edit_time;
    }

    public setEdit_time(edit_time: String): void {
        this.edit_time = edit_time;
    }

    public getJoin_time(): String {
        return this.join_time;
    }

    public setJoin_time(join_time: String): void {
        this.join_time = join_time;
    }

    public isDeleted(): Boolean {
        return this.deleted;
    }

    public setDeleted(deleted: Boolean): void {
        this.deleted = deleted;
    }

    printInfoUser = (): void => {
        logger.info({
            user_seq : this.seq,
            user_email : this.email,
            user_nickname : this.nickname,
            user_token : this.token,
            user_social : this.social,
            user_file : this.file,
            user_login_time : this.login_time,
            user_edit_time : this.edit_time,
            user_join_time : this.join_time,
            user_deleted : this.deleted
        });
    }
}