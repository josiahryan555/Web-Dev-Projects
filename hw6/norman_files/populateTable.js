"use strict";

//gets the data for the rows from the DataService class and calls createRow
//on all of the returned data
function addDataRows() {
    let parentElem = document.getElementById("rows");
    const dataService = new DataService();
    let rowData = dataService.getData();
    console.log(rowData);
    rowData.forEach(element => createRow(parentElem, element));
}

//creates a row with data provieded in rowData and adds it to the DOM under the
//parentElm
function createRow(parentElm, rowData) {
    // console.log(rowData);
    let row = document.createElement("tr");
    for (const property in rowData) {
        //console.log(rowData[property]);
        let cell = document.createElement("td");
        cell.textContent = rowData[property];
        row.appendChild(cell);
    }
    parentElm.appendChild(row);
}