import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { Challenge } from './entities/challenge.entity';

@Controller('challenge')
export class ChallengeController {
  constructor(private readonly challengeService: ChallengeService) {}

  @Get()
  findSome(): Promise<Challenge> {
    return this.challengeService.findSome();
  }

}
