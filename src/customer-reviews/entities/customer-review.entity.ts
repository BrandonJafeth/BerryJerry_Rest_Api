import { BerryJerry } from "src/berry-jerry/entities/berry-jerry.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('CustomerReview')
export class CustomerReview {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customerName: string;

    @Column()
    customerImage: string;

    @Column()
    customerDescription: string;

    @ManyToOne(() => BerryJerry, berryjerry => berryjerry.customerreview)
    berryjerry: BerryJerry;
}


