import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}
