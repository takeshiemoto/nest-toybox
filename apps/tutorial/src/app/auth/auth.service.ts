import { Injectable } from '@nestjs/common';
import { User, UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(
    userName: string,
    password: string
  ): Promise<null | Pick<User, 'id' | 'username'>> {
    const user = await this.userService.findOne(userName);
    // TODO: パスワードは暗号化すること
    if (user && user.password === password) {
      return {
        id: user.id,
        username: user.username,
      };
    }
    return null;
  }

  async login(user: Omit<User, 'password'>) {
    const payload = { username: user.username, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
