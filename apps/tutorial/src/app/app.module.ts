import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [StudentModule, TeacherModule, AuthModule, UserModule],
})
export class AppModule {}
