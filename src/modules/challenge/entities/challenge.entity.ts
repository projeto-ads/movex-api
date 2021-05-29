import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Challenge {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    type: string;

    @ApiProperty()
    @Column()
    description: string;

    @ApiProperty()
    @Column()
    amount: number;
}
