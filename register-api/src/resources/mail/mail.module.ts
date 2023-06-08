import { Module } from '@nestjs/common';
import {MailerModule} from "@nestjs-modules/mailer";
import {MailerConfig} from "../../config/mailer_config";
import {MailService} from "./mail.service";

@Module({
    imports:[
        MailerModule.forRootAsync({
            useClass: MailerConfig
        }),
    ],
    providers: [MailService],
    exports: [MailService]
})
export class MailModule {}
