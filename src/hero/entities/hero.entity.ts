import { BerryJerry } from "src/berry-jerry/entities/berry-jerry.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


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

    @ManyToOne(() => BerryJerry, berryjerry => berryjerry.hero)
    berryjerry: BerryJerry;

}
