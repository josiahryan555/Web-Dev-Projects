//adds a data row for each element in the 'data' array inside the DataService class
const addDataRows = () => {

    const myDataService = new DataService();
    const results = myDataService.getData();
    console.log("results: ", results)

    const table = document.getElementById('rows');

    //Clears table to prevent redundent data
    table.innerHTML = "";

    //creates a row for each element in the results array
    for (let i = 0; i < results.length; i++) {
        createRow(table, results[i]);

    }
}

//Creates a row in the 'parentElem', populating it with data from 'rowData'
//params: parentElem: must be an html table; rowData: must be a dictionary with name, gender, address, age, & phoneNumber
// function createRow(parentElem, rowData) {
const createRow = (parentElem, rowData) => {
    // creates a new row
    const row = parentElem.insertRow();
    //creates 5 new cells to populate with data from 'rowData'
    const cell0 = row.insertCell(0);
    const cell1 = row.insertCell(1);
    const cell2 = row.insertCell(2);
    const cell3 = row.insertCell(3);
    const cell4 = row.insertCell(4);

    //populates cells with data
    cell0.innerHTML = rowData.name;
    cell1.innerHTML = rowData.gender;
    cell2.innerHTML = rowData.address;
    cell3.innerHTML = rowData.age;
    cell4.innerHTML = rowData.phoneNumber;
}

//event listener.  addDataRows() is called on every click of the button in index.html
document.getElementById("button").addEventListener("click", addDataRows);