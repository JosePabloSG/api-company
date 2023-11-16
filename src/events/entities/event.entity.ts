import { Company } from "src/companies/entities/company.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('events')
export class Event {
    
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    title: string;

    @Column()
    url: string; 

    @ManyToOne(() => Company, company => company.event)
  company: Company;
}
