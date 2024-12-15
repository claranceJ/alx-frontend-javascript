// Define the Teacher interface
interface Teacher {
  readonly firstName: string; // Read-only: cannot be modified after initialization
  readonly lastName: string;  // Read-only: cannot be modified after initialization
  fullTimeEmployee: boolean;  // Mandatory attribute
  yearsOfExperience?: number; // Optional attribute
  location: string;           // Mandatory attribute
  [key: string]: any;         // Index signature for dynamic attributes
}

// Example usage of the Teacher interface
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false, // Dynamic attribute
};

console.log(teacher3);

// Output:
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"

// Extend the Teacher interface to create the Directors interface
interface Directors extends Teacher {
  numberOfReports: number; // Mandatory attribute specific to Directors
}

// Create a director object using the Directors interface
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17, // Attribute specific to Directors
};

// Log the director object to the console
console.log(director1);

// Expected Output:
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17



// Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string; // Function signature
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  // Return the first letter of firstName followed by a dot and the full lastName
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe
console.log(printTeacher("Jane", "Smith")); // Output: J. Smith


// Define the interface for the constructor of the class
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Define the interface for the StudentClass
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass class
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method to simulate working on homework
  workOnHomework(): string {
    return "Currently working";
  }

  // Method to return the first name of the student
  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student1 = new StudentClass("John", "Doe");
console.log(student1.workOnHomework()); // Output: Currently working
console.log(student1.displayName());   // Output: John
