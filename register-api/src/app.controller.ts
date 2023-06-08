import {Body, Controller, Inject, Post, Res, ValidationPipe, Request, HttpException, HttpStatus} from '@nestjs/common';
import {Response} from "express";
import {ClientesService} from "./services/clientes.service";
import {RegisterUserDTO} from "./dto/app/RegisterDTO";
import {MailService} from "./resources/mail/mail.service";
import {ContactDataService} from "./services/contact-data.service";

@Controller('user')
export class AppController {

  @Inject(ClientesService)
  private readonly clientesService: ClientesService;

  @Inject(ContactDataService)
  private readonly contactService: ContactDataService;

  @Inject(MailService)
  private readonly mailService:MailService;

  @Post('/create')
  async createUser(@Request() req,@Res() res:Response,@Body(new ValidationPipe({ transform: true })) registerData:RegisterUserDTO){
    try{
      const user = await this.clientesService.createUser(registerData);
      if(user){
        const contactData = await this.contactService.getContactDataByClient(user);
        const mailResult = await this.mailService.sendConfirmRegister(user,contactData);
        if(mailResult){
          res.status(HttpStatus.OK).send({message:"You succesfully sign in into our system."});
        } else {
          res.status(HttpStatus.CONFLICT).send({message:"Your data was persisted in our system but an error has occurred"});
        }

      }
    }catch (e){
      throw new HttpException({message:`Lo sentimos ha ocurrido un error (${e.message})`},HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

}
