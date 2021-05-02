import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChallengeModule } from './modules/challenge/challenge.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config';
import { ProfileModule } from './modules/profile/profile.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({...config, autoLoadEntities: true}),
    ChallengeModule,
    ProfileModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
