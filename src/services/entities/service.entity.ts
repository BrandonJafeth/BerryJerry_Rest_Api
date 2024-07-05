import { BerryJerry } from "src/berry-jerry/entities/berry-jerry.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Service {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titleService: string;

    @Column()
    descriptionService: string;


    @Column()
    imageService: string;
    
    @ManyToOne(() => BerryJerry, berryjerry => berryjerry.service)
    berryjerry: BerryJerry;
}

