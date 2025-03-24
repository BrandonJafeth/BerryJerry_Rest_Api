import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Service {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titleService: string;

    @Column({ length: 500 })
    descriptionService: string;


    @Column()
    imageService: string;
    

}
