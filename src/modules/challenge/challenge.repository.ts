import { EntityRepository, Repository } from "typeorm";
import { Challenge } from "./entities/challenge.entity";

@EntityRepository(Challenge)
export class ChallengeRepository extends Repository<Challenge> {

    public findSome() {
        return this.createQueryBuilder()
                .select("challenge")
                .from(Challenge, "challenge")
                .offset(Math.floor(Math.random() * 101))
                .limit(1)
                .getOne()
    }

}