import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ProfileService } from 'src/modules/profile/profile.service';

@Injectable()
export class AuthService {

    constructor(
        private profileService: ProfileService,
        private jwtService: JwtService,
    ) {}

    async validateUser(userEmail: string, userPassword: string) {
        const user = await this.profileService.getByEmail(userEmail);
        if (user && user.password === userPassword) {
          const { id, name, email } = user;
          return { id, name, email };
        }
    
        return null;
      }

      async login(user: any) {
        const payload = { email: user.email, sub: user.id };
        const profile = await this.profileService.getByEmail(user.email);
        delete profile.password;
        const accessToken = this.jwtService.sign(payload);

        if (accessToken && profile) {
          return {
            access_token: accessToken,
            profile
          }
        }
      }
    
}
