import {Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import {ClientesEntity} from "./clientes.entity";

@Entity({name:'contact_data'})
export class ContactDataEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name:"email",type: 'varchar', length: 50, nullable: false })
    email: string;

    @Column({ name:"phone_number", type: 'varchar', length: 10, nullable: false })
    phone_number: string;

    @OneToOne(() => ClientesEntity,(clientEntity)=>clientEntity.contactDataEntity)
    @JoinColumn()
    clientes: ClientesEntity;
}