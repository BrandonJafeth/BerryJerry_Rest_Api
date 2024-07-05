import { CustomerReview } from "src/customer-reviews/entities/customer-review.entity";
import { FooterInfo } from "src/footer-info/entities/footer-info.entity";
import { Gallery } from "src/gallery/entities/gallery.entity";
import { Hero } from "src/hero/entities/hero.entity";
import { Service } from "src/services/entities/service.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('berryjerry')
export class BerryJerry {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    iconBerry: string;
   

    @OneToMany(() => Gallery, gallery =>  gallery.berryjerry)
    gallery: Gallery[];
  
    @OneToMany(() => Hero, hero => hero.berryjerry)
    hero: Hero[];
  
    @OneToMany(() => Service, service => service.berryjerry)
    service: Service[];
    
    @OneToMany(() => FooterInfo , footerinfo => footerinfo.berryjerry)
    footerinfo: FooterInfo[];
  
    @OneToMany(() => CustomerReview, customerreview => customerreview.berryjerry)
    customerreview: CustomerReview[];
}
