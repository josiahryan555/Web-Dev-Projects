//modified from Professor Norman's Code

"use strict";

//gets the data for the rows from the DataService class and calls createRow
//on all of the returned data
const addDataRows = async () => {
    let parentElem = document.getElementById("rows");
    const dataService = new DataService();
    await dataService.fetchData();  // call to async function that fetchs data
    const rawData = dataService.getData();
    //creates row for each person (10 people per click)
    rawData.forEach(element => createRow(parentElem, element));
}

//creates a row with data provieded in rowData and adds it to the DOM under the
//parentElm
function createRow(parentElm, rowData) {
    // console.log(rowData);
    let row = document.createElement("tr");

    //creates elements
    let name = document.createElement("td");
    let gender = document.createElement("td");
    let address = document.createElement("td");
    let age = document.createElement("td");
    let phoneNumber = document.createElement("td");
    let pic = document.createElement("img");

    //give elements content
    name.textContent = rowData.name.title + " " + rowData.name.first + " " + rowData.name.last;
    gender.textContent = rowData.gender;
    address.textContent = rowData.location.street.number + " " + rowData.location.street.name + " " + rowData.location.city + " " + rowData.location.country;
    age.textContent = rowData.dob.age;
    phoneNumber.textContent = rowData.cell;
    pic.src = rowData.picture.medium;

    //add children
    row.appendChild(name);
    row.appendChild(gender);
    row.appendChild(address);
    row.appendChild(age);
    row.appendChild(phoneNumber);
    row.appendChild(pic);

    //add rows
    parentElm.appendChild(row);
}

document.getElementById("button").addEventListener("click", addDataRows);