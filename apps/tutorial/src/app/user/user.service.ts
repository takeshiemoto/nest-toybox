import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../utils/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOne(userFindUniqueArgs: Prisma.UserFindUniqueArgs) {
    return this.prismaService.user.findUnique(userFindUniqueArgs);
  }
}
