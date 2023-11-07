import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('galleries')
export class Galleries {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;
}
