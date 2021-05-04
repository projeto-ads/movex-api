import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Challenge {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    description: string;

    @Column()
    amount: number;
}
