import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  findOne(id: number) {
    return this.profileRepository.findOne(id);
  }

  update(id: number, profile: Profile) {
    return this.profileRepository.update(id, { 
        level: profile.level,
        currentExperience: profile.currentExperience,
        challengesCompleted: profile.challengesCompleted
    });
  }

}
