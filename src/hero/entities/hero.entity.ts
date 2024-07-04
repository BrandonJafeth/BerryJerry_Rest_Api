import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('hero')
export class Hero {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titleHero: string;

    @Column()
    descriptionHero: string;


    @Column()
    imageHero: string;

    @Column()
    iconBerry: string;
}
