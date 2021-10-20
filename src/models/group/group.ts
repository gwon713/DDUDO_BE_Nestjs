import logger from '../../config/logger';
export class Group{
    private seq : Number;
    private user_seq : Number;
    private name : String;
    private kind : String;
    private status : Boolean;
    private liked : Number;
    private start_date : String;
    private place : String;
    private chat_link : String;
    private total_user : Number;
    private join_user : Number;
    private about : String;
    private hashtag : Object;
    private edit_time : String;
    private create_time : String;
    private deleted : Boolean;

    constructor(
        seq: Number, 
        user_seq: Number, 
        name: String, 
        kind: String, 
        status: Boolean, 
        liked: Number, 
        start_date: String, 
        place: String, 
        chat_link: String, 
        total_user: Number, 
        join_user: Number, 
        about: String, 
        hashtag: Object, 
        edit_time: String, 
        create_time: String, 
        deleted: Boolean
    )   
    {
        this.seq = seq
        this.user_seq = user_seq
        this.name = name
        this.kind = kind
        this.status = status
        this.liked = liked
        this.start_date = start_date
        this.place = place
        this.chat_link = chat_link
        this.total_user = total_user
        this.join_user = join_user
        this.about = about
        this.hashtag = hashtag
        this.edit_time = edit_time
        this.create_time = create_time
        this.deleted = deleted
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

    public getName(): String {
        return this.name;
    }

    public setName(name: String): void {
        this.name = name;
    }

    public getKind(): String {
        return this.kind;
    }

    public setKind(kind: String): void {
        this.kind = kind;
    }

    public isStatus(): Boolean {
        return this.status;
    }

    public setStatus(status: Boolean): void {
        this.status = status;
    }

    public getLiked(): Number {
        return this.liked;
    }

    public setLiked(liked: Number): void {
        this.liked = liked;
    }

    public getStart_date(): String {
        return this.start_date;
    }

    public setStart_date(start_date: String): void {
        this.start_date = start_date;
    }

    public getPlace(): String {
        return this.place;
    }

    public setPlace(place: String): void {
        this.place = place;
    }

    public getChat_link(): String {
        return this.chat_link;
    }

    public setChat_link(chat_link: String): void {
        this.chat_link = chat_link;
    }

    public getTotal_user(): Number {
        return this.total_user;
    }

    public setTotal_user(total_user: Number): void {
        this.total_user = total_user;
    }

    public getJoin_user(): Number {
        return this.join_user;
    }

    public setJoin_user(join_user: Number): void {
        this.join_user = join_user;
    }

    public getAbout(): String {
        return this.about;
    }

    public setAbout(about: String): void {
        this.about = about;
    }

    public getHashtag(): Object {
        return this.hashtag;
    }

    public setHashtag(hashtag: Object): void {
        this.hashtag = hashtag;
    }

    public getEdit_time(): String {
        return this.edit_time;
    }

    public setEdit_time(edit_time: String): void {
        this.edit_time = edit_time;
    }

    public getCreate_time(): String {
        return this.create_time;
    }

    public setCreate_time(create_time: String): void {
        this.create_time = create_time;
    }

    public isDeleted(): Boolean {
        return this.deleted;
    }

    public setDeleted(deleted: Boolean): void {
        this.deleted = deleted;
    }

    printInfoGroup = (): void => {
        logger.info({
            group_seq : this.seq,
            user_seq : this.user_seq,
            group_name : this.name,
            group_kind : this.kind,
            group_status : this.status,
            group_liked : this.liked,
            group_start_date : this.start_date,
            group_place : this.place,
            group_chat_link : this.chat_link,
            group_total_user : this.total_user,
            group_join_user : this.join_user,
            group_about : this.about,
            group_hashtag : this.hashtag,
            group_edit_time : this.edit_time,
            group_create_time : this.create_time
        });
    }
}