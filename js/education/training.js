$(document).ready(function () {
    training();
});
function training() {
    $("#educationTraining").append(
        '<div class="col-lg-4 col-md-4 col-sm-12 alignLeft marginsOnQualification">' +
        '<div class="sectionHeader">' +
        '<b>' +
        'TRAINING' +
        '</b>' +
        '<br>' +
        '<input id="training" class="alignLeft paddingInput inputWidth" type="text" placeholder="What type?">' +
        '<div id="trainingDone" class="sectionHeader justifyContent"></div>' +
        '</div>' +
        '</div>' +
        '<div class="col-lg-4 col-md-4 col-sm-12 alignCenter marginsOnQualification">' +
        ' <div class="sectionHeader">' +
        '<b>' +
        'INSTITUTION' +
        '</b>' +
        '<br>' +
        '<input class="alignLeft paddingInput inputWidth" type="text" placeholder="What place?">' +
        '</div>' +
        '</div>' +
        '<div class="col-lg-4 col-md-4 col-sm-12 alignRight marginsOnQualification">' +
        '<div class="sectionHeader">' +
        '<b>' +
        'YEAR' +
        '</b>  ' +
        '<br>' +
        '<input class="alignRight paddingInput" type="text" placeholder="What year?">' +
        '<i class="fas fa-minus paddingOnButtons" title="Remove Item"></i>' +
        '</div>' +
        '</div>'
    );
}

function addTraining(){
    $("#educationTraining").append(          
'<div class="col-lg-4 col-md-4 col-sm-12 alignLeft">'+
    '<div class="sectionHeader">'+
        '<input id="training" class="alignLeft paddingInput inputWidth" type="text" placeholder="What type?">'+
       '<b>'+
            '<div id="trainingDone" class="sectionHeader justifyContent">'+
            '</div>'+
        '</b>'+
    '</div>'+
'</div>'+
'<div class="col-lg-4 col-md-4 col-sm-12 alignCenter">'+
    '<div class="sectionHeader">'+
        '<input class="alignLeft paddingInput inputWidth" type="text" placeholder="What place?">'+
    '</div>'+
'</div>'+
'<div class="col-lg-4 col-md-4 col-sm-12 alignRight">'+
    '<div class="sectionHeader">'+
        '<input class="alignRight paddingInput" type="text" placeholder="What year?">'+
        '<i class="fas fa-minus paddingOnButtons" title="Remove Item"></i>' +
    '</div>'+
'</div>');
}