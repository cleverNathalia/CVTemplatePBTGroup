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
  $("#matricValueDone").show();  

  var matricYearValue = document.getElementById("matricYearValue").value;
  $("#matricYearValueDone").text(matricYearValue);
  $("#matricYearValue").hide();
  $("#matricYearValueDone").show();
  updateFooter();
}

function updateFooter(){
  var date = new Date();
  $("#footerRight").text("Last updated: "+date.getFullYear());
}

