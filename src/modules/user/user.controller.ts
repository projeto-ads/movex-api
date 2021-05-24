import { JwtAuthGuard } from './../auth/shared/jwt-auth.guard';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService,
    ){}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(): Promise<User[]> {
        return this.userService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: number): Promise<User> {
        return this.userService.getById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() user: User): Promise<User> {
        return this.userService.create(user);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id') id: number, @Body() user: User): Promise<User> {
        return this.userService.update(id, user);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.userService.delete(id);
    }
}