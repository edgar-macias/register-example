import {InjectRepository} from "@nestjs/typeorm";
import {ClientesRepository} from "../db/repository/clientes-repository.service";
import {Injectable} from "@nestjs/common";
import {ContactDataRepository} from "../db/repository/contact-data-repository.service";
import {ClientesEntity} from "../db/entity/clientes.entity";

@Injectable()
export class ContactDataService{
    @InjectRepository(ContactDataRepository)
    private readonly contactDataRepository: ContactDataRepository;

    async getContactDataByClient(client:ClientesEntity){
        return await this.contactDataRepository.getEmailByClient(client);
    }
}