// Define the `Student` interface with the required properties
interface Student {
  firstName: string; // The first name of the student
  lastName: string;  // The last name of the student
  age: number;       // The age of the student
  location: string;  // The location of the student
}

// Create two student objects using the `Student` interface
const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 20,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 22,
  location: "Mombasa",
};

// Create an array containing the two student objects
const studentsList: Student[] = [student1, student2];

// Select the body element to append the table
const body: HTMLElement = document.body;

// Create a table element
const table: HTMLTableElement = document.createElement("table");

// Add some basic styles to the table for better readability
table.style.border = "1px solid black";
table.style.width = "50%";
table.style.margin = "20px auto";
table.style.borderCollapse = "collapse";
table.style.textAlign = "left";

// Create the table header row
const headerRow: HTMLTableRowElement = document.createElement("tr");

// Define the table headers
const headers: string[] = ["First Name", "Location"];

// Append each header to the header row
headers.forEach((headerText) => {
  const headerCell: HTMLTableCellElement = document.createElement("th");
  headerCell.textContent = headerText;
  headerCell.style.border = "1px solid black";
  headerCell.style.padding = "8px";
  headerCell.style.backgroundColor = "#f2f2f2"; // Light gray background for headers
  headerRow.appendChild(headerCell);
});

// Append the header row to the table
table.appendChild(headerRow);

// Iterate through the students list and create a row for each student
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement("tr");

  // Create a cell for the first name
  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = "1px solid black";
  firstNameCell.style.padding = "8px";

  // Create a cell for the location
  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid black";
  locationCell.style.padding = "8px";

  // Append the cells to the row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  // Append the row to the table
  table.appendChild(row);
});

// Append the table to the body of the document
body.appendChild(table);
