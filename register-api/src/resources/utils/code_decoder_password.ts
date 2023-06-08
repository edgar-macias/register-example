import {createHash} from "crypto";
export class CodeDecodePassword {
    /**
     * Logic to code password
      * @param password
     */
    static encodePassword(password:string):string{
        return createHash('md5').update(password).digest('hex');
    }
}