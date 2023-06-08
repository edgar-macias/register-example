import {ClientesRepository} from "../db/repository/clientes-repository.service";
import {ClientesEntity} from "../db/entity/clientes.entity";
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {RegisterUserDTO} from "../dto/app/RegisterDTO";

@Injectable()
export class ClientesService {

    @InjectRepository(ClientesRepository)
    private readonly clientesRepository: ClientesRepository

    async getById(id:number):Promise<ClientesEntity> {
        return this.clientesRepository.getById(id);
    }

    async createUser(data:RegisterUserDTO){
        return this.clientesRepository.createUser(data);
    }
}