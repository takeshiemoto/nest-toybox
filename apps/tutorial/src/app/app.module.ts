import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';

@Module({
  imports: [StudentModule, TeacherModule, AuthModule, UserModule],
  controllers: [AppController],
})
export class AppModule {}
