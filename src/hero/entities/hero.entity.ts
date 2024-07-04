import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Hero')
export class Hero {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titleHero: string;

    @Column()
    descriptionHero: string;


    @Column()
    imageHero: string;


}
