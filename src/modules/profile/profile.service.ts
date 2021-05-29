import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entities/profile.entity';
import { ProfileDTO } from './dto/profile.dto';
import { createBlobService } from 'azure-storage';
import { removeUndefined } from '../utils/object-util';
import * as dotenv from "dotenv";

dotenv.config();
@Injectable()
export class ProfileService {

  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) { }

  async getAll(){
      return await this.profileRepository.find();
  }

  async getByID(id: number) {
      return await this.profileRepository.findOne(id);
  }

  async getByEmail(email: string) {
    return await this.profileRepository.findOne({email});
  }

  async create(profile: Profile) {
      return await this.profileRepository.save(profile)
  }

  async update(id: number, profile: Profile){
    await this.profileRepository.update(id, profile);
    return this.getByID(id);
  }

  async updateChallengeInfo(id: number, profile: ProfileDTO) {
    const profileEntity = removeUndefined(profile);
    return await this.profileRepository.update(id, profileEntity);
  }

  async uploadProfileImage(id: number, body: any) {
    const fileName = `profile-${id}` + '.jpg';
    const image64Base = new String(body.image64Base);
    const blobService = createBlobService(process.env.AZURE_STORAGE_CONNECTION_STRING);
    const matches = image64Base.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    const type = matches[1];
    const buffer = Buffer.from(matches[2], 'base64');
    let imageUrl = `${process.env.AZURE_STORAGE_URL}/${fileName}`;
    await blobService.createBlockBlobFromText('profile', fileName, buffer, { contentSettings: { contentType: type } }
      , function (error, result, response) {
        if (error) {
          imageUrl = 'assets/default.png';
        }
      });
    
    await this.profileRepository.update(id, { imageUrl })

    return { imageUrl };
  }

  async delete(id: number) {
    return await this.profileRepository.delete(id);
  }

}
