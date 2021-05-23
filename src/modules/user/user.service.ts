import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}
    
    async getAll(){
        return await this.userRepository.find();
    }

    async getById(id: number){
        return await this.userRepository.findOne(id);
    }

    async getByEmail(email: string) {
        return await this.userRepository.findOne({email});
    }

    async create(user: User){
        return await this.userRepository.save(user);
    }

    async update(id: number, user: User){
         await this.userRepository.update(id, user);
         return this.getById(id);
    }

    async delete(id: number) {
        return await this.userRepository.delete(id);
    }

}