import { Company } from "src/companies/entities/company.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('services')
export class Service {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    paragraph: string;

    @Column()
    url: string;
    
    @ManyToOne(() => Company, company => company.service)
    company: Company;

}
