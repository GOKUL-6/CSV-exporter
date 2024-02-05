document.addEventListener("DOMContentLoaded", function () {
  var exportButton = document.getElementById("exportButton");
  exportButton.addEventListener("click", exportToCSV);
});

function exportToCSV() {
  let accValue = document.getElementById("inputValue").value;
  let idValue = document.getElementById("inputValue2").value;

  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
  let year = currentDate.getFullYear();

  let formattedDate = `${day}/${month}/${year}`;
  let formattedMonth = `${month} ${year}`;
  let analyst = "Gokul";
  let caseOrCall = "case";
  let subj = "Subject;";

  if (accValue.trim() === "" || idValue.trim() === "") {
    alert("Please enter a value.");
    return;
  }

  let arr = [
    formattedDate,
    formattedMonth,
    analyst,
    caseOrCall,
    idValue,
    accValue,
    subj,
  ];
  var csvContent = "data:text/csv;charset=utf-8," + encodeURIComponent(arr);
  var link = document.createElement("a");
  link.href = csvContent;
  link.download = "exported_data.csv";
  link.click();
}
