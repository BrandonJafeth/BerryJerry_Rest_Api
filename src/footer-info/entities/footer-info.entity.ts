import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
