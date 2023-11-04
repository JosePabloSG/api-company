import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
  titleServices: string;

  @Column()
  subtitleServices: string;

  @Column()
  paragraphServices: string;

  @Column()
  titleEvents: string;

  @Column()
  subtitleEvents: string;

  @Column()
  imageFooter: string;

  @Column()
  titleFooter: string;

  @Column()
  paragraphFooter: string;

  @Column()
  titleGallery: string;

  @Column()
  titleContact: string;

  @Column()
  paragraphContactAchaba: string;

  @Column()
  paragraphContactSuarez: string;

  @Column()
  titleHome: string;

  @Column()
  paragraphHomeProducts: string;

  @Column()
  paragraphHomeAboutUs: string;
}

