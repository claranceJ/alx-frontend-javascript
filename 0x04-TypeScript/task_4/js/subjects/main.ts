/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

import { Subjects } from "./subjects/Cpp";
import { Subjects as JavaSubjects } from "./subjects/Java";
import { Subjects as ReactSubjects } from "./subjects/React";

// Create and export constants for the subjects
export const cpp = new Subjects.Cpp();
export const java = new JavaSubjects.Java();
export const react = new ReactSubjects.React();

// Create and export a Teacher object
export const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

// Cpp Subject
console.log("C++");
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements()); // "Here is the list of requirements for Cpp"
console.log(cpp.getAvailableTeacher()); // "Available Teacher: John"

// Java Subject
console.log("Java");
java.setTeacher = cTeacher;
console.log(java.getRequirements()); // "Here is the list of requirements for Java"
console.log(java.getAvailableTeacher()); // "No available teacher" (cTeacher has no experienceTeachingJava)

// React Subject
console.log("React");
react.setTeacher = cTeacher;
console.log(react.getRequirements()); // "Here is the list of requirements for React"
console.log(react.getAvailableTeacher()); // "No available teacher" (cTeacher has no experienceTeachingReact)
