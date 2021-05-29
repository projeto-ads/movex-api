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
        return {
          acess_token: this.jwtService.sign(payload),
        };
      }
    
}
