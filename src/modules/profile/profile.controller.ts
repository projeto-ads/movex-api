import { Controller, Get, Body, Param, Put } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileDTO } from './dto/profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.profileService.findOne(+id);
  }

  @Put(':id')
  updateChallengeInfo(@Param('id') id: number, @Body() profile: ProfileDTO) {
    return this.profileService.updateChallengeInfo(+id, profile);
  }

  @Put('upload-image/:id')
  uploadProfileImage(@Param('id') id: number, @Body() body: any) {
    return this.profileService.uploadProfileImage(+id, body);
  }

}
