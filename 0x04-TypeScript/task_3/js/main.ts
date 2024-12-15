/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// Create a row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert the row and store the returned ID
const newRowID: RowID = CRUD.insertRow(row); // Insert row {firstName: "Guillaume", lastName: "Salva"}

// Create an updated row object
const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};

// Update the row using the newRowID
CRUD.updateRow(newRowID, updatedRow); // Update row {firstName: "Guillaume", lastName: "Salva", age: 23}

// Delete the row using the newRowID
CRUD.deleteRow(newRowID); // Delete row id 125
