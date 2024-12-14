namespace Subjects {
    export interface Teacher {
      firstName: string;
      lastName: string;
      experienceTeachingC?: number;
      experienceTeachingReact?: number;
      experienceTeachingJava?: number;
    }
  
    export class Subject {
      private teacher: Teacher;
  
      setTeacher(teacher: Teacher) {
        this.teacher = teacher;
      }
    }
  }
  