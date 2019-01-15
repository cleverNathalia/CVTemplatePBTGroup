$(document).ready(function () {
    careerHistory();
});
function careerHistory() {
    $("#careerHistoryHolder").append(
        '<div class="row">' +
        '<div class="col-lg-3 col-md-4 col-sm-12 alignLeft"></div>' +
        '<div class="col-lg-4 col-md-4 col-sm-12 alignRight">' +
        '<i class="fas fa-minus paddingOnButtons"></i>' +
        '</div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="col-lg-3 col-md-4 col-sm-12 alignLeft">' +
        '<div class="sectionHeader">' +
        '<b>' +
        'Company' +
        '</b>' +
        '</div>' +
        '</div>' +
        '<div class="col-lg-9 col-md-4 col-sm-12 alignLeft">' +
        '<div class="sectionHeader">' +
        '<b>' +
        '<input class="alignLeft paddingInput inputWidth" type="text" placeholder="What company?">' +
        '</b>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="col-lg-3 col-md-4 col-sm-12 alignLeft">' +
        '<div class="sectionHeader">' +
        '<b>' +
        'Position' +
        '</b>' +
        '</div>' +
        '</div>' +
        '<div class="col-lg-9 col-md-4 col-sm-12 alignLeft">' +
        '<div class="sectionHeader">' +
        '<input class="alignLeft paddingInput inputWidth" type="text" placeholder="What position?">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="col-lg-3 col-md-4 col-sm-12 alignLeft">' +
        '<div class="sectionHeader">' +
        '<b>' +
        'Period' +
        '</b>' +
        '</div>' +
        '</div>' +
        '<div class="col-lg-9 col-md-4 col-sm-12 alignLeft">' +
        '<div class="sectionHeader">' +
        '<input class="alignLeft paddingInput inputWidth" type="text" placeholder="Period of work?">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="col-lg-3 col-md-4 col-sm-12 alignLeft">' +
        '<div class="sectionHeader">' +
        '<b>' +
        'Duties' +
        '</b>' +
        '</div>' +
        '</div>' +
        '<div class="col-lg-9 col-md-4 col-sm-12 alignLeft">' +
        '<div id="duties" class="sectionHeader">' +
        '<ul>' +
        '<li>' +
        '<input class="alignLeft paddingInput inputWidth" type="text" placeholder="What were your duties?">' +
        '<i class="fas fa-minus paddingOnButtons"></i>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="col-lg-3 col-md-4 col-sm-12 alignLeft">' +
        '</div>'+
        '<div class="col-lg-9 col-md-4 col-sm-12">' +
        '<div class="sectionHeader">' +
        '<div class="btn btn-primary" onclick="addDuties()">Add Duties</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );
}