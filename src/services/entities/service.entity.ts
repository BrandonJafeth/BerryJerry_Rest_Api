import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



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
    

}
