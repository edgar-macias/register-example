import {Injectable} from "@nestjs/common";
import {DataSource, Repository} from "typeorm";
import {ContactDataEntity} from "../entity/contact_data.entity";
import {ClientesEntity} from "../entity/clientes.entity";

@Injectable()
export class ContactDataRepository extends Repository<ContactDataEntity>{
    constructor(private dataSource:DataSource) {
        super(ContactDataEntity,dataSource.createEntityManager());
    }

    async getEmailByClient(client:ClientesEntity):Promise<ContactDataEntity>{
        return await this.findOne({where:{ clientes :client}});
    }
}