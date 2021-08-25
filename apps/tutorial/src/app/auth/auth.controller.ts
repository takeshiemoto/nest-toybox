import { Post } from '@nestjs/common';
import { Controller, UseGuards, Request } from '@nestjs/common';
import { User } from '../user/user.service';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: { user: Omit<User, 'password'> }) {
    return this.authService.login(req.user);
  }
}
