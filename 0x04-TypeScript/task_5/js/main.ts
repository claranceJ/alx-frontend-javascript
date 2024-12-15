// Define the MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: "MajorCredits"; // Unique brand identifier
}

// Define the MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: "MinorCredits"; // Unique brand identifier
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: "MajorCredits" };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: "MinorCredits" };
}

// Example Usage:
const majorSubject1: MajorCredits = { credits: 30, brand: "MajorCredits" };
const majorSubject2: MajorCredits = { credits: 20, brand: "MajorCredits" };

const minorSubject1: MinorCredits = { credits: 15, brand: "MinorCredits" };
const minorSubject2: MinorCredits = { credits: 10, brand: "MinorCredits" };

console.log(sumMajorCredits(majorSubject1, majorSubject2)); // { credits: 50, brand: "MajorCredits" }
console.log(sumMinorCredits(minorSubject1, minorSubject2)); // { credits: 25, brand: "MinorCredits" }
