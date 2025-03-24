import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('footerinfo')
export class FooterInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    descriptionFooter: string;

    @Column()
    phoneFooter: string;

    @Column()
    emailFooter: string;

    @Column()
    iconFooter: string;
}

