import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';

import { AuthController } from './auth.controller';

import { AuthService } from './shared/auth.service';
import { LocalStrategy } from './shared/local.strategy';
import { JwtStrategy } from './shared/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';


@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret:  process.env.JWT_SECRET_KEY,
            signOptions: { expiresIn: '60s'},
        }),
    ],
    controllers: [
        AuthController,
    ],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy
    ],
})
export class AuthModule { }
