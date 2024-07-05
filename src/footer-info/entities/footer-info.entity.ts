import { BerryJerry } from "src/berry-jerry/entities/berry-jerry.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('FooterInfo')
export class FooterInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descriptionFooter: string;

    @Column()
    phoneFooter: string;

    @Column()
    emailFooter: string;

    @ManyToOne(() => BerryJerry, berryjerry => berryjerry.footerinfo)
    berryjerry: BerryJerry;
}

