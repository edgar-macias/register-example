import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {ClientesEntity} from "./clientes.entity";

@Entity({name:'security'})
export class SecurityEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name:"password", type: 'varchar', length: 50, nullable: false })
    password: string;

    @OneToOne(() => ClientesEntity,(clientEntity)=>clientEntity.securityEntity)
    @JoinColumn()
    clientes: ClientesEntity;
}