import { Injectable } from '@nestjs/common';
import { users } from '../../db';

export type User = { password: string; id: string; username: string };

@Injectable()
export class UserService {
  private readonly users = users;

  async findOne(userName: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === userName);
  }
}
