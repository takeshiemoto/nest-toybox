import { Injectable } from '@nestjs/common';
import { Prisma,Student } from '@prisma/client';

import { PrismaService } from '../utils/prisma.service';

@Injectable()
export class StudentService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<Student[]> {
    return this.prismaService.student.findMany();
  }

  async findById(
    studentWhereUniqInput: Prisma.StudentWhereUniqueInput
  ): Promise<Student> {
    return this.prismaService.student.findUnique({
      where: studentWhereUniqInput,
    });
  }
}
