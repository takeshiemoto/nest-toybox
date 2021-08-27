import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { students } from '../../db';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>
  ) {}
  private students = students;

  getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  getStudentById(studentId: number): Promise<Student | undefined> {
    return this.studentRepository.findOne(studentId);
  }

  createStudent(payload: CreateStudentDto): StudentResponseDto {
    const newStudent = {
      id: uuid(),
      ...payload,
    };

    this.students.push(newStudent);

    return newStudent;
  }

  updateStudent(
    payload: UpdateStudentDto,
    studentId: string
  ): StudentResponseDto {
    let updatedStudent: StudentResponseDto;

    this.students = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          id: studentId,
          ...payload,
        };
        return updatedStudent;
      }
      return student;
    });

    return updatedStudent;
  }

  getStudentByTeacherId(teacherId: string): FindStudentResponseDto[] {
    return this.students.filter((student) => student.teacher === teacherId);
  }

  updateStudentTeacher(
    teacherId: string,
    studentId: string
  ): StudentResponseDto {
    let updatedStudent: StudentResponseDto;

    this.students = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          id: studentId,
          ...student,
          teacher: teacherId,
        };
        return updatedStudent;
      }
      return student;
    });

    return updatedStudent;
  }
}
