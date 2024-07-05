import { BerryJerry } from "src/berry-jerry/entities/berry-jerry.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('gallery')
export class Gallery {


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @ManyToOne(() => BerryJerry, berryjerry => berryjerry.gallery)
    berryjerry: BerryJerry;
}
