import { Controller, UseGuards, Request, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './shared/auth.service';
import { LocalAuthGuard } from './shared/local-auth.guard';

@ApiTags('auth')
@Controller()
export class AuthController {

    constructor(
        private authService: AuthService,
    ){ }
    
    @ApiResponse({ status: 201, description: 'User Login.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req: any){
        return this.authService.login(req.user);
    }
}
