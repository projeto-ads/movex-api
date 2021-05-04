import { Module } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { ChallengeController } from './challenge.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChallengeRepository } from './challenge.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ChallengeRepository])],
  controllers: [ChallengeController],
  providers: [ChallengeService],
  exports: [TypeOrmModule]
})
export class ChallengeModule {}
