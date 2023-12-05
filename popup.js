document.addEventListener("DOMContentLoaded", function () {
  var exportButton = document.getElementById("exportButton");
  exportButton.addEventListener("click", exportToCSV);
});

function exportToCSV() {
  var inputValue = document.getElementById("inputValue").value;

  if (inputValue.trim() === "") {
    alert("Please enter a value.");
    return;
  }

  var csvContent =
    "data:text/csv;charset=utf-8," + encodeURIComponent(inputValue);
  var link = document.createElement("a");
  link.href = csvContent;
  link.download = "exported_data.csv";
  link.click();
}
