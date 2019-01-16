var qualification_counter = 0;

$(document).ready(function () {
    $("#qualificationPopup").hide();
});

function qualification() {
    $("#qualificationPopup").show();
    $("#qualificationPopup").append(
        '<form id="qualificationForm">' +
        '<div class="modal-content-Skill">' +

        '<div class="row">' +
        '<div class= "col-lg-3 col-md-12 col-sm-12">Qualification :</div>' +
        '<div class= "col-lg-3 col-md-12 col-sm-12">Institution :</div>' +
        '<div class= "col-lg-3 col-md-12 col-sm-12">Year :</div>' +
        '</div>' +

        '<div class="row">' +
        '<div class= "col-lg-3 col-md-12 col-sm-12">' +
        '<input id="qualificationType" class="alignLeft paddingInput" type="text" autocomplete="off" placeholder="What type?" required pattern="[A-Za-z]">' +
        '</div >' +
        '<div class="col-lg-3 col-md-12 col-sm-12">' +
        '<input id="qualificationPlace" class="alignLeft paddingInput " type="text" autocomplete="off" placeholder="What place?" required pattern="[A-Za-z]">' +
        '</div>' +
        ' <div class="col-lg-3 col-md-12 col-sm-12 ">' +
        '<input id="qualificationYear" class="alignRight paddingInput" type="number" autocomplete="off" placeholder="Year?" required min="1960" max="2019">' +
        '</div>' +
        '<div class="col-lg-3 col-md-12 col-sm-12 alignRight">' +
        '<button type="submit" onclick="addQualification()" class="btn btn-primary btnAddSkill">Add</button>' +
        '<i onclick="closeQualification()" class="fas fa-times cursors">' + '</i>' +
        '</div>' +
        '</div>' +

        '</div>' +
        '</form>'
    );
}

function addQualification() {
    var qualificationType = $("#qualificationType").val();
    var qualificationPlace = $("#qualificationPlace").val();
    var qualificationYear = $("#qualificationYear").val();

    if (qualificationType != "" && qualificationPlace != "" && qualificationYear != ""
        && isNumber(qualificationType) === false && isNumber(qualificationPlace) === false && isNumber(qualificationYear) === true && qualificationYear >= 1960 && qualificationYear <= 2019) {
        $("#qualificationPopup").html("");
        $("#qualificationPopup").hide();

        $("#insertQualification").append(
            '<div id="qualification@' + qualification_counter + '" class="row">' +

            '<div class="col-lg-4 col-md-4 col-sm-4 alignLeft">' +
            '<div class="sectionHeader">' +
            qualificationType +
            '</div>' +
            '</div>' +

            '<div class="col-lg-4 col-md-4 col-sm-4 alignCenter">' +
            '<div class="sectionHeader">' +
            qualificationPlace +
            '</div>' +
            '</div>' +

            '<div class="col-lg-4 col-md-4 col-sm-4 alignRight">' +
            '<div class="sectionHeader">' +
            qualificationYear +
            '<i id="removeQualification@' + qualification_counter + '" class="fas fa-minus paddingOnButtons" title="Remove Item" onclick="removeQualification()"></i>' +
            '</div>' +
            '</div>' +

            '</div>');

        qualification_counter++;
    }
}

function removeQualification() {
    var itemRemoveId = event.target.id;
    var qualification_id = itemRemoveId.substring(itemRemoveId.indexOf("@") + 1);
    document.getElementById("qualification@" + qualification_id).remove();
}

function closeQualification() {
    $("#qualificationPopup").hide();
    $("#qualificationPopup").html("");
    $("#qualificationType").val("");
    $("#qualificationPlace").val("");
    $("#qualificationYear").val("");

}