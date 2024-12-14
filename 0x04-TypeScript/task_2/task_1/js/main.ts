interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
	return 'Working from home';
  }

  getCoffeeBreak(): string {
	return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
	return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
	return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
	return 'Cannot have a break';
  }

  workTeacherTasks(): string {
	return 'Getting to work';
  }
}

function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
  if (typeof salary === 'number' && salary < 500) {
	return new Teacher();
  } else {
	return new Director();
  }
}

console.log(createEmployee(200)); // Output: Teacher
console.log(createEmployee(1000)); // Output: Director
console.log(createEmployee('$500')); // Output: Director


//---------------------function for employees--------------//

function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
  return 'numberOfReports' in employee;
}

function executeWork(employee: DirectorInterface | TeacherInterface) {
  if (isDirector(employee)) {
	employee.workDirectorTasks();
  } else {
	employee.workTeacherTasks();
  }
}

// Example usage:
console.log(executeWork(createEmployee(200))); // Output: Getting to work
console.log(executeWork(createEmployee(1000))); // Output: Getting to director tasks


//---------------------------------String literal types------------//

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
	return 'Teaching Math';
  } else {
	return 'Teaching History';
  }
}

console.log(teachClass('Math')); // Output: Teaching Math
console.log(teachClass('History')); // Output: Teaching History

