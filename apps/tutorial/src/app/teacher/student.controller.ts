import { Controller, Get, Put } from '@nestjs/common';

@Controller('/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents() {
    return 'Get All Student That Belong To A Teacher';
  }

  @Put('/:studentId')
  updateStudentTeacher() {
    return 'Update Student Teacher';
  }
}
