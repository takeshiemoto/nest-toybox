import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../user/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(
    userName: string,
    password: string
  ): Promise<Pick<User, 'id' | 'username'>> {
    const user = await this.authService.validateUser(userName, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
