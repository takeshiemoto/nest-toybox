import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { StudentService } from './student.service';

@Controller('students')
@UseGuards(JwtAuthGuard)
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents() {
    return this.studentService.findAll();
  }

  @Get('/:id')
  async getStudentById(@Param('id', new ParseIntPipe()) id: number) {
    return this.studentService.findById({ id: id });
  }
}
