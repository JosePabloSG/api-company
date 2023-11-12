import { Company } from "src/companies/entities/company.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity('galleries')
export class Galleries {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;
    
    @ManyToOne(() => Company, company => company.galleries)
    company: Company;
}
