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
  update(@Param('id') id: number, @Body() profile: ProfileDTO) {
    return this.profileService.update(+id, profile);
  }

}
