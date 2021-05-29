import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ChallengeService } from './challenge.service';
import { Challenge } from './entities/challenge.entity';

@ApiTags('challenge')
@Controller('challenge')
export class ChallengeController {
  constructor(private readonly challengeService: ChallengeService) {}

  @ApiResponse({ status: 201, description: 'Find some challenge.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get()
  findSome(): Promise<Challenge> {
    return this.challengeService.findSome();
  }

}
