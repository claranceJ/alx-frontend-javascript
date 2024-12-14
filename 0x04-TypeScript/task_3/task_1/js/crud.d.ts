<reference path="interface.ts" />

declare namespace CRUD {
    export function insertRow(row: RowElement): RowID;
    export function deleteRow(rowId: RowID): void;
    export function updateRow(rowId: RowID, row: RowElement): RowID;
  }
  
  declare module 'crud' {
    export = CRUD;
  }
  