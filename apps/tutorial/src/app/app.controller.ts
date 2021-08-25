import { Post } from '@nestjs/common';
import { Controller, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from './user/user.service';

@Controller()
export class AppController {
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req: { user: Omit<User, 'password'> }) {
    return req.user;
  }
}
