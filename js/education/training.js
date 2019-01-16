var training_counter = 0;

$(document).ready(function () {
    $("#trainingPopup").hide();
});

function training() {
    $("#trainingPopup").show();
    $("#trainingPopup").append(
        '<form id="trainingForm">' +
        '<div class="modal-content-Skill">' +

        '<div class="row">' +
        '<div class= "col-lg-3 col-md-12 col-sm-12">Training :</div>' +
        '<div class= "col-lg-3 col-md-12 col-sm-12">Institution :</div>' +
        '<div class= "col-lg-3 col-md-12 col-sm-12">Year :</div>' +
        '</div>' +

        '<div class="row">' +
        '<div class= "col-lg-3 col-md-12 col-sm-12">' +
        '<input id="trainingType" class="alignLeft paddingInput" type="text" autocomplete="off" placeholder="What type?" required pattern="[A-Za-z]">' +
        '</div >' +
        '<div class="col-lg-3 col-md-12 col-sm-12">' +
        '<input id="trainingPlace" class="alignLeft paddingInput " type="text" autocomplete="off" placeholder="What place?" required pattern="[A-Za-z]">' +
        '</div>' +
        ' <div class="col-lg-3 col-md-12 col-sm-12 ">' +
        '<input id="trainingYear" class="alignRight paddingInput" type="number" autocomplete="off" placeholder="Year?" required min="1960" max="2019">' +
        '</div>' +
        '<div class="col-lg-3 col-md-12 col-sm-12 alignRight">' +
        '<button type="submit" onclick="addTraining()" class="btn btn-primary btnAddSkill">Add</button>' +
        '<i onclick="closeTraining()" class="fas fa-times cursors">' + '</i>' +
        '</div>' +
        '</div>' +

        '</div>' +
        '</form>'
    );
}

function addTraining() {
    var trainingType = $("#trainingType").val();
    var trainingPlace = $("#trainingPlace").val();
    var trainingYear = $("#trainingYear").val();

    if (trainingType != "" && trainingPlace != "" && trainingYear != ""
        && isNumber(trainingType) === false && isNumber(trainingPlace) === false && isNumber(trainingYear) === true && trainingYear >= 1960 && trainingYear <= 2019) {
        $("#trainingPopup").html("");
        $("#trainingPopup").hide();

        $("#insertTraining").append(
            '<div id="training@' + training_counter + '" class="row">' +

            '<div class="col-lg-4 col-md-4 col-sm-4 alignLeft">' +
            '<div class="sectionHeader">' +
            trainingType +
            '</div>' +
            '</div>' +

            '<div class="col-lg-4 col-md-4 col-sm-4 alignCenter">' +
            '<div class="sectionHeader">' +
            trainingPlace +
            '</div>' +
            '</div>' +

            '<div class="col-lg-4 col-md-4 col-sm-4 alignRight">' +
            '<div class="sectionHeader">' +
            trainingYear +
            '<i id="removetraining@' + training_counter + '" class="fas fa-minus paddingOnButtons" title="Remove Item" onclick="removeTraining()"></i>' +
            '</div>' +
            '</div>' +

            '</div>');

            training_counter++;
    }
}

function removeTraining() {
    var itemRemoveId = event.target.id;
    var training_id = itemRemoveId.substring(itemRemoveId.indexOf("@") + 1);
    document.getElementById("training@" + training_id).remove();
}

function closeTraining() {
    $("#trainingPopup").hide();
    $("#trainingPopup").html("");
    $("#trainingType").val("");
    $("#trainingPlace").val("");
    $("#trainingYear").val("");

}