import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('hero')
export class Hero {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titleHero: string;

    @Column({ length: 500 })
    descriptionHero: string;


    @Column()
    imageHero: string;

    @Column()
    iconBerry: string;

    @Column()
    heropng: string;
}
