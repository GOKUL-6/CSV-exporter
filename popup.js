document.addEventListener("DOMContentLoaded", function () {
  var exportButton = document.getElementById("exportButton");
  exportButton.addEventListener("click", exportToCSV);
});

function exportToCSV() {
  let accValue = document.getElementById("inputValue").value;
  let idValue = document.getElementById("inputValue2").value;

  if (accValue.trim() === "" || idValue.trim() === "") {
    alert("Please enter a value.");
    return;
  }
  var arr = [accValue, idValue];
  var csvContent = "data:text/csv;charset=utf-8," + encodeURIComponent(arr);
  var link = document.createElement("a");
  link.href = csvContent;
  link.download = "exported_data.csv";
  link.click();
}
