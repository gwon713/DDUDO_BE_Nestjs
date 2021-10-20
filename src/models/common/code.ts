import logger from '../../config/logger';
export class Code{
    private code_id : String;
    private code_name : String;
    private code_etc : String;
    private use_at : Boolean;

    constructor(
        code_id: String, 
        code_name: String, 
        code_etc: String, 
        use_at: Boolean
    ) 
    {
        this.code_id = code_id
        this.code_name = code_name
        this.code_etc = code_etc
        this.use_at = use_at
    }

    public getCode_id(): String {
        return this.code_id;
    }

    public setCode_id(code_id: String): void {
        this.code_id = code_id;
    }

    public getCode_name(): String {
        return this.code_name;
    }

    public setCode_name(code_name: String): void {
        this.code_name = code_name;
    }

    public getCode_etc(): String {
        return this.code_etc;
    }

    public setCode_etc(code_etc: String): void {
        this.code_etc = code_etc;
    }

    public isUse_at(): Boolean {
        return this.use_at;
    }

    public setUse_at(use_at: Boolean): void {
        this.use_at = use_at;
    }

    printInfoCode = () : void => {
        logger.info({
            code_id : this.code_id,
            code_name : this.code_name,
            code_etc : this.code_etc,
            use_at : this.use_at
        });
    }
};