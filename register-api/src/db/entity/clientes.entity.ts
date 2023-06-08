import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {ContactDataEntity} from "./contact_data.entity";
import {SecurityEntity} from "./security.entity";

@Entity({name:'clientes'})
export class ClientesEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name:"name", type: 'varchar', length: 50 })
    name: string;

    @Column({ name:"last_name",type: 'varchar', length: 50, nullable: true })
    last_name: string;

    @OneToOne(()=>ContactDataEntity, (contactDataEntity)=>contactDataEntity.clientes)
    contactDataEntity: ContactDataEntity

    @OneToOne(()=>SecurityEntity, (securityEntity)=>securityEntity.clientes)
    securityEntity: SecurityEntity
}