import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    level: number;

    @Column({ name: "current_experience" })
    currentExperience: number;

    @Column({ name: "challenges_completed" })
    challengesCompleted: number;

    @Column({ name: "image_url" })
    imageUrl: string;
}
