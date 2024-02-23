function insert_Row() {
    //Write your code here
	// script.js

function insert_Row() {
    // Get the reference to the table
    var table = document.getElementById("sampleTable");

    // Insert a new row at the top
    var newRow = table.insertRow(0);

    // Insert cells into the new row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Set the values for the new cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}

  
  
}
