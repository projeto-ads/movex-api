import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('hello')
@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiResponse({ status: 201, description: 'Hello Api.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
