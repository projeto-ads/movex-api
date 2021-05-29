import { Controller, Get, Body, Param, Put, UseGuards, Post, Delete } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileDTO } from './dto/profile.dto';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';
import { Profile } from './entities/profile.entity';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

    @ApiOkResponse({ description: 'Find all users.' })
    @ApiForbiddenResponse({ description: 'Forbidden.' })
    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(): Promise<Profile[]> {
        return this.profileService.getAll();
    }

    @ApiOkResponse({ description: 'Find by ID users.' })
    @ApiForbiddenResponse({ description: 'Forbidden.' })
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: number): Promise<Profile> {
        return this.profileService.getByID(id);
    }

    @ApiCreatedResponse({ description: 'Create users.' })
    @ApiForbiddenResponse({ description: 'Forbidden.' })
    @Post()
    async create(@Body() profile: Profile) {
        this.profileService.create(profile);
    }
    
    @ApiOkResponse({ description: 'Update user current.' })
    @ApiForbiddenResponse({ description: 'Forbidden.' })
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id') id: number, @Body() profile: Profile): Promise<Profile> {
        return this.profileService.update(id, profile);
    }

    @ApiOkResponse({ description: 'Update user challenge info.' })
    @ApiForbiddenResponse({ description: 'Forbidden.' })
    @Put(':id')
    updateChallengeInfo(@Param('id') id: number, @Body() profile: ProfileDTO) {
        return this.profileService.updateChallengeInfo(+id, profile);
    }

    @ApiOkResponse({ description: 'Update user image.' })
    @ApiForbiddenResponse({ description: 'Forbidden.' })
    @Put('upload-image/:id')
    uploadProfileImage(@Param('id') id: number, @Body() body: any) {
        return this.profileService.uploadProfileImage(+id, body);
    }
    
    @ApiOkResponse({ description: 'Delete current user.' })
    @ApiForbiddenResponse({ description: 'Forbidden.' })
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.profileService.delete(id);
    }

}
