import { Post } from '@nestjs/common';
import { Controller, UseGuards, Request } from '@nestjs/common';
import { User } from './user/user.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: { user: Omit<User, 'password'> }) {
    return req.user;
  }
}
