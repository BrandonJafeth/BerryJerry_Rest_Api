import { Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('gallery')
export class Gallery {


    @PrimaryGeneratedColumn()
    id: number;
}
