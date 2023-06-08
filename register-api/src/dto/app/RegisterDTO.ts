import {IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString} from "class-validator";

export class RegisterUserDTO {
    @IsString()
    @IsNotEmpty()
    public name: string;

    @IsString()
    @IsOptional()
    public last_name: string;

    @IsEmail()
    @IsNotEmpty()
    public email:string;

    @IsPhoneNumber('MX')
    @IsNotEmpty()
    public phone_number:string;

    @IsString()
    @IsNotEmpty()
    public password:string;

    @IsString()
    @IsNotEmpty()
    public c_password:string;

}