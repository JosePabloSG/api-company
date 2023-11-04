import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('events')
export class Event {
    
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    title: string;

    @Column()
    url: string; 
}
