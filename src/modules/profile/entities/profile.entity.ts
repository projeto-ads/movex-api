import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {
    
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column()
    email: string;

    @ApiProperty()
    @Column()
    password: string;

    @ApiProperty()
    @Column({default: 1})
    level: number;

    @ApiProperty()
    @Column({ name: "current_experience", default: 0})
    currentExperience: number;

    @ApiProperty()
    @Column({ name: "challenges_completed", default: 0 })
    challengesCompleted: number;

    @ApiProperty()
    @Column({ name: "image_url", default: "assets/default.png" })
    imageUrl: string;
}
