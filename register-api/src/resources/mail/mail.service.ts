import {Injectable} from "@nestjs/common";
import {MailerService} from "@nestjs-modules/mailer";
import {ClientesEntity} from "../../db/entity/clientes.entity";
import {ContactDataEntity} from "../../db/entity/contact_data.entity";

@Injectable()
export class MailService{


    constructor(private readonly mailerService:MailerService) {}

    async sendConfirmRegister(client:ClientesEntity,contactData:ContactDataEntity){

        const mailResult = await this.mailerService.sendMail({
            from: 'Ejemplo <noreply@test.com>',
            to: contactData.email,
            subject: 'Succesful sign in',
            template: 'confirmation',
            context: {
                name: `${client.name} ${client.last_name}`
            }
        });

        return mailResult.response.search('OK') !== -1;
    }

}