import { MailerOptions, MailerOptionsFactory } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

export class MailerConfig implements MailerOptionsFactory {

    createMailerOptions(): Promise<MailerOptions> | MailerOptions {
        return {
            transport:{
                host: 'smtp.gmail.com',
                port: 465,
                secure:true,
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASSWORD
                }
            },
            defaults: {
                from: '"No reply" <noreply@test.mx>'
            },
            template:{
                dir: process.cwd() + process.env.MAIL_TEMPLATES_DIR,
                adapter: new HandlebarsAdapter(),
                options:{
                    strict:true
                }
            }
        };
    }

}