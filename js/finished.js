$(document).ready(function () {
  $("#matricValueDone").hide();
  $("#matricYearValueDone").hide();
});
function finished() {
  // CANDIDATE NAME:
  var candidateName = document.getElementById("candidateName").value;
  $("#candidateNameDone").text(candidateName);
  $("#candidateName").hide();
  // MATRIC: 
  var matricValue = document.getElementById("matricValue").value;
  $("#matricValueDone").text(matricValue);
  $("#matricValue").hide();

  var matricYearValue = document.getElementById("matricYearValue").value;
  $("#matricYearValueDone").text(matricYearValue);
  $("#matricYearValue").hide();
}

