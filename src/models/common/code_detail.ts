import logger from '../../config/logger';
export class Code_detail{
    private code_id : String;
    private code_detail_id : String;
    private code_detail_name : String;
    private code_detail_etc : String;
    private use_at : Boolean;

    constructor(
        code_id: String, 
        code_detail_id: String, 
        code_detail_name: String, 
        code_detail_etc: String, 
        use_at: Boolean
    ) 
    {
        this.code_id = code_id
        this.code_detail_id = code_detail_id
        this.code_detail_name = code_detail_name
        this.code_detail_etc = code_detail_etc
        this.use_at = use_at
    }
   
    public getCode_id(): String {
        return this.code_id;
    }

    public setCode_id(code_id: String): void {
        this.code_id = code_id;
    }

    public getCode_detail_id(): String {
        return this.code_detail_id;
    }

    public setCode_detail_id(code_detail_id: String): void {
        this.code_detail_id = code_detail_id;
    }

    public getCode_detail_name(): String {
        return this.code_detail_name;
    }

    public setCode_detail_name(code_detail_name: String): void {
        this.code_detail_name = code_detail_name;
    }

    public getCode_detail_etc(): String {
        return this.code_detail_etc;
    }

    public setCode_detail_etc(code_detail_etc: String): void {
        this.code_detail_etc = code_detail_etc;
    }

    public isUse_at(): Boolean {
        return this.use_at;
    }

    public setUse_at(use_at: Boolean): void {
        this.use_at = use_at;
    }

    printInfoCode_detail = () : void => {
        logger.info({
            code_id : this.code_id,
            code_detail_id : this.code_detail_id,
            code_detail_name : this.code_detail_name,
            code_detail_etc : this.code_detail_etc,
            use_at : this.use_at
        });
    }
};