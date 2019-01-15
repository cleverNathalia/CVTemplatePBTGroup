var training_counter = 0;

function addTraining() {
    $("#educationTraining").append(
        '<div id="training@' + training_counter + '" class="row">' +

        '<div class="col-lg-4 col-md-4 col-sm-12 alignLeft">' +
        '<div class="sectionHeader">' +
        '<input id="training" class="alignLeft paddingInput inputWidth" type="text" placeholder="What type?">' +
        '</div>' +
        '</div>' +

        '<div class="col-lg-4 col-md-4 col-sm-12 alignCenter">' +
        '<div class="sectionHeader">' +
        '<input class="alignLeft paddingInput inputWidth" type="text" placeholder="What place?">' +
        '</div>' +
        '</div>' +

        '<div class="col-lg-4 col-md-4 col-sm-12 alignRight">' +
        '<div class="sectionHeader">' +
        '<input class="alignRight paddingInput" type="text" placeholder="What year?">' +
        '<i id="removeTraining@' + training_counter + '" class="fas fa-minus paddingOnButtons" title="Remove Item" onclick="removeTraining()"></i>' +
        '</div>' +
        '</div>' +

        '</div>');

        training_counter++;
}

function removeTraining() {
    var itemRemoveId = event.target.id;
    var training_id = itemRemoveId.substring(itemRemoveId.indexOf("@") + 1);
    document.getElementById("training@" + training_id).remove();
}