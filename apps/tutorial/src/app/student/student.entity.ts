import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Teacher } from '../teacher/teacher.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Teacher, (t) => t.students)
  teacher: Teacher;
}
