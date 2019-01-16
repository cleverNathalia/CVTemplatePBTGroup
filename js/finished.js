$(document).ready(function () {
  $("#matricValueDone").hide();
  $("#matricYearValueDone").hide();
  $("#finishPopup").hide();
});

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function finished() {
  var candidateNameValid = document.getElementById('candidateName').validity.valid;
  var matricValue = document.getElementById('matricValue').validity.valid;
  var matricYearValue = document.getElementById('matricYearValue').validity.valid;

  if (candidateNameValid === true && matricValue === true && matricYearValue === true) {
    $("#finishPopup").show();
    $("#finishPopup").append(
      '<div class="modal-content-Finish">' +

      '<div class="row alignCenter">' +
      '<div class="col-lg-12 col-md-12 col-sm-12 alignCenter marginTop" id="yesFinish">' +
      'Are you sure?' +
      '</div>' +
      '</div>' +

      '<div class="row">' +
      '<div class="col-lg-6 col-md-6 col-sm-6 alignRight marginTop" id="yesFinish">' +
      '<div class=" btn btn-primary marginOnButtons" onclick="yesFinished()">Yes</div>' +
      '</div>' +
      '<div class="col-lg-6 col-md-6 col-sm-6 alignLeft marginTop" id="noFinish">' +
      '<div class=" btn btn-primary marginOnButtons" onclick="noFinished()">No</div>' +
      '</div>' +
      '</div>' +

      '</div>' +
      '</form>'
    );
  } else {
    document.forms['nameCheckForm'].reportValidity();
    document.forms['matricCheckForm'].reportValidity();
    document.forms['matricYearCheckForm'].reportValidity();
  }


}

function yesFinished() {
  $("#finishPopup").hide();

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

  // HIDE BUTTONS
  $("#addQualificationButton").hide();
  $("#addTrainingButton").hide();
  $("#addCareerHistoryButton").hide();
  $("#addIndustryButton").hide();
  $("#finishButton").hide();


  updateFooter();
}

function noFinished() {
  $("#finishPopup").hide();
  $("#finishPopup").html("");
}

function updateFooter() {
  var date = new Date();
  var candidateName = $("#candidateName").val();
  $("#footerDate").text("Last updated: " + date.getFullYear());
  $("#footerName").text(candidateName);
}


