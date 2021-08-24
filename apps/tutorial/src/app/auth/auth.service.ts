import { Injectable } from '@nestjs/common';
import { User, UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

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
}
