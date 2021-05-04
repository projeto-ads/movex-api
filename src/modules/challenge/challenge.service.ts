import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChallengeRepository } from './challenge.repository';
import { Challenge } from './entities/challenge.entity';

@Injectable()
export class ChallengeService {

  constructor(
    @InjectRepository(Challenge)
    private readonly challengeRepository: ChallengeRepository
  ) {}

  findSome(): Promise<Challenge> {
    return this.challengeRepository.findSome();
  }

}
