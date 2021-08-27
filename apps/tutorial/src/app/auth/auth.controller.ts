import { Post } from '@nestjs/common';
import { Controller, Request,UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';

import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: { user: Omit<User, 'password'> }) {
    return this.authService.login(req.user);
  }
}
