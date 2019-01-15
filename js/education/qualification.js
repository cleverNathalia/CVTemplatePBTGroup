var qualification_counter = 0;

function addQualificationPopup() {
    $("#educationQualification").append(
        '<div id="qualification@' + qualification_counter + '" class="row">' +

        '<div class="col-lg-4 col-md-4 col-sm-4 alignLeft">' +
        '<div class="sectionHeader">' +
        '<input id="qualificationType@' + qualification_counter + '" class="alignLeft paddingInput inputWidth" type="text" placeholder="What type?">' +
        '<div id="qualificationTypeDone@' + qualification_counter + '" class="alignLeft"></div>'+
        '</div>' +
        '</div>' +

        '<div class="col-lg-4 col-md-4 col-sm-4 alignCenter">' +
        '<div class="sectionHeader">' +
        '<input id="qualificationPlace@' + qualification_counter + '" class="alignLeft paddingInput inputWidth" type="text" placeholder="What place?">' +
        '<div id="qualificationPlaceDone@' + qualification_counter + '" class="alignLeft"></div>'+
        '</div>' +
        '</div>' +
        
        '<div class="col-lg-4 col-md-4 col-sm-4 alignRight">' +
        '<div class="sectionHeader">' +
        '<input id="qualificationYear@' + qualification_counter + '" class="alignRight paddingInput" type="text" placeholder="What year?">' +
        '<i id="removeQualification@' + qualification_counter + '" class="fas fa-minus paddingOnButtons" title="Remove Item" onclick="removeQualification()"></i>' +
        '<div id="qualificationYearDone@' + qualification_counter + '" class="alignRight"></div>'+
        '</div>' +
        '</div>' +

        '</div>');

    qualification_counter++;
}

function removeQualification() {
    var itemRemoveId = event.target.id;
    var qualification_id = itemRemoveId.substring(itemRemoveId.indexOf("@") + 1);
    document.getElementById("qualification@" + qualification_id).remove();
}