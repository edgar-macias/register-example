import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {MailModule} from "./resources/mail/mail.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import { ConfigModule } from '@nestjs/config';
import {TypeOrmConfigService} from "./config/typeorm_config";
import {ClientesEntity} from "./db/entity/clientes.entity";
import {SecurityEntity} from "./db/entity/security.entity";
import {ContactDataEntity} from "./db/entity/contact_data.entity";
import {ClientesService} from "./services/clientes.service";
import {ClientesRepository} from "./db/repository/clientes-repository.service";
import {ContactDataRepository} from "./db/repository/contact-data-repository.service";
import {ContactDataService} from "./services/contact-data.service";

@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: ! process.env.NODE_ENV ? '.env' : `.env.${process.env.NODE_ENV}`,
      }),
      TypeOrmModule.forRootAsync({useClass : TypeOrmConfigService}),
      TypeOrmModule.forFeature([ClientesEntity,ContactDataEntity,SecurityEntity]),
      MailModule
  ],
  controllers: [AppController],
  providers: [ClientesService,ClientesRepository,ContactDataRepository,ContactDataService],
})
export class AppModule {}
