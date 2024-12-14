interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'New York'
  };
  
  const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 30,
    location: 'Los Angeles'
  };
  
  const studentsList: Student[] = [student1, student2];
  
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');
  table.appendChild(tableBody);
  
  studentsList.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');
  
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
  });
  
  document.body.appendChild(table);
  