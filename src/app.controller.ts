import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get('status')
  getStatus() {
    return { status: 'API is running smoothly!' };
  }
}
