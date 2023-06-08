import {DataSource, Repository} from "typeorm";
import {ClientesEntity} from "../entity/clientes.entity";
import {Injectable} from "@nestjs/common";
import {RegisterUserDTO} from "../../dto/app/RegisterDTO";
import {ContactDataEntity} from "../entity/contact_data.entity";
import {SecurityEntity} from "../entity/security.entity";
import {CodeDecodePassword} from "../../resources/utils/code_decoder_password";

@Injectable()
export class ClientesRepository extends Repository<ClientesEntity>{
    constructor(private dataSource:DataSource) {
        super(ClientesEntity,dataSource.createEntityManager());
    }

    /**
     * function which get a user or client entity by id.
     * @param id
     */
    async getById(id:number){
        return this.findOne({where: {id:id}})
    }

    /**
     * function that persist the user or client data in db
     * @param registerUserData
     */
    async createUser(registerUserData:RegisterUserDTO):Promise<ClientesEntity>{
        const user = new ClientesEntity();
        user.name = registerUserData.name;
        user.last_name = registerUserData.last_name;
        await this.dataSource.manager.save<ClientesEntity>(user);

        const security = new SecurityEntity();
        security.password = CodeDecodePassword.encodePassword(registerUserData.password);
        security.clientes = user;

        const contactData = new ContactDataEntity();
        contactData.email = registerUserData.email;
        contactData.phone_number = registerUserData.phone_number;
        contactData.clientes = user;

        await this.dataSource.manager.save<ContactDataEntity>(contactData);
        await this.dataSource.manager.save<SecurityEntity>(security);

        return user;
    }
}