import { Galleries} from "src/galleries/entities/gallery.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('companies')
export class Company {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  logoheader: string;

  @Column()
  nameheader: string;

  @Column()
  subtitleHero: string;

  @Column()
  titleHero: string;

  @Column()
  paragraphHero: string;

  @Column()
  imageHero: string;

  @Column()
  subtitleServices: string;

  @Column()
  titleServices: string;

  @Column()
  paragraphServices: string;

  @Column()
  galleryTitle: string;
  
  @Column()
  subtitleEvents: string;

  @Column()
  titleEvents: string;

  @Column()
  paragraphEvents: string;

  @Column()
  imageFooter: string;

  @Column()
  titleFooter: string;

  @Column()
  paragraphFooter: string;

  @Column()
  titleHome: string;

  @Column()
  paragraphHomeProducts: string;

  @Column()
  paragraphHomeAboutUs: string;

  @Column()
  titleContact: string;

  @Column()
  paragraphContactAchaba: string;

  @Column()
  paragraphContactSuarez: string;

  @OneToMany(() => Galleries, galleries =>  galleries.company)
  galleries: Galleries[];
}

