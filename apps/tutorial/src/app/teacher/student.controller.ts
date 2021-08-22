import { Controller, Get, Param, Put } from '@nestjs/common';

@Controller('/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents(@Param('teacherId') teacherId: string) {
    return `Get All Student That Belong To A Teacher With An Id Of ${teacherId}`;
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string
  ) {
    return `Update Student WIth Id of ${studentId} To Teacher With Id of ${teacherId}`;
  }
}
