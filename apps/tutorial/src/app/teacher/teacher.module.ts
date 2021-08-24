import { Module } from '@nestjs/common';
import { StudentTeacherController } from './student.controller';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';
import { StudentModule } from '../student/student.module';

@Module({
  imports: [StudentModule],
  controllers: [StudentTeacherController, TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
