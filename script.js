let selectedRow = null;

function onFormSubmit(e) {
  event.preventDefault();
  let formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

//Retrieve the information from the form
function readFormData() {
  const formData = {};
  formData["productCode"] = document.getElementById("productCode").value;
  formData["product"] = document.getElementById("product").value;
  formData["qty"] = document.getElementById("qty").value;
  formData["perPrice"] = document.getElementById("perPrice").value;
  return formData;
}

//Insert Data
function insertNewRecord(data) {
  const table = document
    .getElementById("storeList")
    .getElementsByTagName("tBody")[0];
  const newRow = table.insertRow(table.length);
  const cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.productCode;
  const cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.product;
  const cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.qty;
  const cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.perPrice;
  const cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<button onClick = 'onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;
}

//Edit the data
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
  document.getElementById("product").value = selectedRow.cells[1].innerHTML;
  document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
  document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.productCode;
  selectedRow.cells[1].innerHTML = formData.product;
  selectedRow.cells[2].innerHTML = formData.qty;
  selectedRow.cells[3].innerHTML = formData.perPrice;
}

//Delete the data
function onDelete(td) {
  if (confirm("Do you want to dleete the record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
  }
  resetForm();
}

//Reset the data
function resetForm() {
  document.getElementById("productCode").value = "";
  document.getElementById("product").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("perPrice").value = "";
}
