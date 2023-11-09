import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
